const { useSelector, useDispatch } = require("react-redux")
import { setSearchRating, setShow, storeCondition,setSerchItemValue0 } from "@/redux/feature/search/searchSlice"
import Link from "next/link"
import { useState } from "react"

const search = ()=>{
       const dispatch  = useDispatch()
    const items = useSelector((state)=>state.searchItem)
    const show = useSelector((state)=>state.searchItem.show)
    const productData = useSelector(state => state.cart)
    const searchItem =useSelector(state=>state.searchItem)
  
    const handelClick=(user)=>{
        dispatch(setShow(false))
        dispatch(storeCondition({id:user.id,brand:user.brand,category:user.category}))
        dispatch(setSearchRating(true))
        dispatch(setSerchItemValue0(""))
    }
    // console.log("productDAta",productData.products)
    return(
        <div>
            {
                // productData.products && 
                items.Value !== ''  && show &&
                productData.products.filter((element)=>(
                    element.title.toLowerCase().includes(items.Value))
                     || element.brand.toLowerCase().includes((items.Value))
                    //  || element.id.includes(items.Value)
                )
                   
                .map((user)=> <h3 key={user.id}> <Link href={`/${user.id}`} onClick={()=>handelClick(user)}>{user.title}</Link></h3>)
                //     return element.id == 1
                 
            }
        </div>
    )
}

export default search