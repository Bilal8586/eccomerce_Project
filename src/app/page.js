'use client'

import Link from "next/link"
import HeorBanner from "../components/hero"
import Product from '../components/product'
import { useEffect,useState } from "react"
import { useDispatch ,useSelector} from "react-redux"
import { addUserId, fetchItemsAsyn } from "@/redux/feature/cart/cartSlice"
import { useSession } from "next-auth/react"
import { fetchDataAsy } from "@/redux/feature/product/productSlice"
 const home = ()=>{
  const data = useSelector((state) => state.item);

  const { status, data: session } = useSession();
  const [loginCheck, setCheck] = useState('')
  const dispatch = useDispatch()

  const CheckUser = async () => {
    if (status == 'unauthenticated') {
      try {
        const response = await axios.get('/api/me')
        setCheck(response.data)
      } catch (error) {
        console.log('getUser Data filed', error)
      }
    }

    if (status == 'authenticated') {
      console.log('adduserId product page')
      return dispatch(addUserId(session?.user?.email))
    } else if (loginCheck.message == 'User found') {
      console.log('adduserId product page')
  
      return dispatch(addUserId(loginCheck.data.email))
    }
  }
  useEffect(()=>{
    CheckUser()
    dispatch(fetchItemsAsyn());
    dispatch(addUserId(data.userId))
    dispatch(fetchDataAsy())
  })
  return(
    <div>
      <HeorBanner  />
      <Product />
    </div>  
  )
}
export default home
