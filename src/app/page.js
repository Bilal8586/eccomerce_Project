'use client'
import HeorBanner from "../components/hero"
import Product from '../components/product'
import { useEffect,useState } from "react"
import { useDispatch ,useSelector} from "react-redux"
import { addUserId, addUserStatus, fetchItemsAsyn } from "@/redux/feature/cart/cartSlice"
import { useSession } from "next-auth/react"
import { fetchDataAsy } from "@/redux/feature/product/productSlice"
import axios from "axios"
import { useRouter } from "next/navigation"

const home = ()=>{
  const router = useRouter()

const data = useSelector((state) => state.item);
const { status, data: session } = useSession();
const [loginCheck, setCheck] = useState('')
const dispatch = useDispatch()
// console.log('data',data.userId)
// console.log('lgoincheing',loginCheck)
// console.log('statuscheing',status)
// console.log('data.userstatus',data.userStatus)


  const CheckUser = async () => {
   
    if(loginCheck.message !== 'User found'){
      try {
        const response = await axios.get('/api/me')
        setCheck(response.data)
        console.log('api call me')
      } catch (error) {
        console.log('getUser Data filed', error)
      }
    }
      
      console.log('setUserId function')

      if (status == 'authenticated') {
        console.log('dispatch  statsu')
          // router.push('/')
           dispatch(addUserStatus('authenticated'))
          dispatch(addUserId(session?.user?.email))
        
         
        
      }
       if (loginCheck.message == 'User found') {
        console.log('dispatch lgoin')
    
         dispatch(addUserId(loginCheck.data.email))
         dispatch(addUserStatus('User found'))

      }
      
     
      
    }
// const setUserId = ()=>{
  
//   }
  
  useEffect(() => {

    dispatch(fetchItemsAsyn());
    // dispatch(addUserId(data.userId))
    dispatch(fetchDataAsy());
    CheckUser();
    // setUserId();
  }, [loginCheck,status]);


  return(
    <div>
      <HeorBanner  />
      <Product />
    </div>  
  )
}
export default home
