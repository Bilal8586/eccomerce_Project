"use client"
 import { useDispatch, useSelector } from "react-redux"
 import { BsFillStarFill } from "react-icons/bs"
import { useState } from "react"
import {addItemsAsyn} from "@/redux/feature/cart/cartSlice"
import ProductCetegore  from "@/components/productcategore"
import Rating from '@/components/starRatin'
const productDetail =({params})=>{
    const productData = useSelector(state=> state.cart)
  const data = useSelector((state) => state.item);
  const dispatch = useDispatch()

    const [count,setCount]=useState(0)
//  console.log(params.productName+1)
    return(
       <div>
        
        {
            productData.products &&
            productData.products.filter((element)=> element.id == +params.productName)
            .map((item)=>{
                const check = data.items.some((el)=>{
                    return el.id === item.id
                  })
                return (
                    <section>
                    <div className="flex justify-around pt-[100px] bg-slate-200" key={item.id}>
                            <div className="flex "> 
                                <div className=" flex  flex-col gap-10 m-7 pt-[28px]">
                                    <div className="w-[50px] cursor-pointer" onMouseEnter={()=> setCount(0)}> <img src={item?.images[0]} /></div>
                                   <div className="w-[50px] cursor-pointer" onMouseEnter={()=> setCount(1)}> <img src={item?.images[1]} /></div>
                                   <div className="w-[50px] cursor-pointer" onMouseEnter={()=> setCount(2)}> <img src={item?.images[2]} /></div>
                                   <div className="w-[50px] cursor-pointer" onMouseEnter={()=> setCount(3)}> <img src={item?.images[3]} /></div>
                                </div>
                                <div className="w-[500px] grid   h-[500px]   items-center">
                                   <div className="w-[500px] h-[400px]"> <img className="h-[400px] w-[400px]" src={item?.images[count]} /></div>
                                   {/* <div className="w-[500px]"> <img src={item?.images[1]} /></div>
                                   <div className="w-[500px]"> <img src={item?.images[2]} /></div>
                                   <div className="w-[500px]"> <img src={item?.images[3]} /></div> */}

                                </div>
                            </div>
                            <div className=" w-[675px] flex flex-col justify-center">
                                <div>
                                   <h1 className=" text-[33px]">{item.description}</h1>
                                    <div className="flex">
                                      
                                        <h3 className="flex items-center gap-1">
                                           Rating {item.rating}< Rating rating={item.rating} /></h3>
                                    </div>
                                </div>
                                 <div>
                                    <div>
                                    <h2>{item.discountPercentage}%</h2>
                                     <h2>${item.price}</h2>
                                    
                                     </div>
                                     <h4>M.R.P ${(item.price/100*item.discountPercentage).toFixed(2)}</h4>
                                 </div>
                                 <div>
                                    <button
                                    onClick={()=> dispatch(addItemsAsyn(item))}
                                      className=" w-[160px] hover:border-orange-600  hover:border-[1px] mt-1 bg-orange-600 rounded-3xl hover:bg-white hover:text-orange-600 p-2 text-white "
                                    > { 
                       
                                        !check ? "Add to Cart":"Product Added"
                                      }</button>
                                 </div>
                            </div>
                              
                    </div>
                    <div>
                    <h1 className=" text-center text-2xl font-bold ">Related Products</h1>
                        <ProductCetegore category={item.category} />
                     </div>
                 </section>
                )
            })
        }
        
       </div>
    )
}
export default productDetail