"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItemsAsyn } from "@/redux/feature/cart/cartSlice";
import ProductCetegore from "@/components/productcategore";
import Rating from "@/components/starRatin";
import {  BsPlusCircleFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { AiFillMinusCircle } from "react-icons/ai";

const productDetail = ({ params }) => {
  const productData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.item);
  const [Quntity,setQuntity]=useState(1)

 
  const [count, setCount] = useState(0);
  return (
    <div>
      {productData.products &&
        productData.products
          .filter((element) => element.id == +params.productName)
          .map((item) => {
            
            return (
              <section key={item.id}>
                <div
                  className="md:flex md:flex-row flex flex-col justify-around pt-[100px] bg-slate-200"
                  key={item.id}
                >
                  <div className="flex md:flex md:flex-row flex-col-reverse  ">
                    <div className=" flex  md:flex-col gap-10 m-7 pt-[28px]">
                      <div
                        className="w-[50px] cursor-pointer"
                        onMouseEnter={() => setCount(0)}
                      >
                        {" "}
                        <img src={item?.images[0]} />
                      </div>
                      <div
                        className="w-[50px] cursor-pointer"
                        onMouseEnter={() => setCount(1)}
                      >
                        {" "}
                        <img src={item?.images[1]} />
                      </div>
                      <div
                        className="w-[50px] cursor-pointer"
                        onMouseEnter={() => setCount(2)}
                      >
                        {" "}
                        <img src={item?.images[2]} />
                      </div>
                      <div
                        className="w-[50px] cursor-pointer"
                        onMouseEnter={() => setCount(3)}
                      >
                        {" "}
                        <img src={item?.images[3]} />
                      </div>
                    </div>

                    <div className="md:w-[500px] w-full md:h-[500px]   items-center">
                      <div className="md:w-[500px] md:h-[400px] w-full">
                        {" "}
                        <img
                          className="md:h-[400px] md:w-[400px] w-full"
                          src={item?.images[count]}
                        />
                      </div>
                    
                    </div>

                  </div>
                  <div className=" md:w-[675px] w-full flex flex-col justify-center">
                    <div>
                      <h1 className=" text-[33px]">{item.description}</h1>
                      <div className="flex ml-3">
                        <h3 className="flex items-center gap-1">
                          Rating {item.rating}
                          <Rating rating={item.rating} />
                        </h3>
                      </div>
                    </div>
                    <div className="md:ml-0 ml-3">
                      <div>
                        <h2 className="text-red-600 line-through">
                          {item.discountPercentage}% OFF
                        </h2>
                        <h2>${item.price}</h2>
                      </div>
                      <h4>
                        M.R.P $
                        {((item.price / 100) * item.discountPercentage).toFixed(
                          2
                        )}
                      </h4>
                    </div>
                    <div className="md:ml-0 ml-3 w-[67px]">
                      <div className=" text-2xl gap-1 flex flex-row-reverse justify-center">
                        <button onClick={()=>{
                          setQuntity(Quntity+1)
                          
                          }}><BsPlusCircleFill /></button>
                        {Quntity}
                        <button onClick={()=>{
                          setQuntity(Quntity < 2 ? 1 : Quntity-1)
                         
                        }}><AiFillMinusCircle /></button>

                      </div>
                      <button
                       onClick={() => {
                        if (data.userId !== "") {
                          const userId = data.userId;
                          toast.success('Item added')
                          return dispatch(
                            addItemsAsyn({
                              items: item,
                             Quntity,
                              userId,
                              productId: item.id,
                            })
                          );
                        } else if (data.userId == "") {
                          alert("please login to add items");
                        }
                      }}
                        className=" w-[160px] hover:border-orange-600  hover:border-[1px] mt-1 bg-orange-600 rounded-3xl hover:bg-white hover:text-orange-600 p-2 text-white "
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" m-10 ">
                  <h1 className=" text-center md:text-2xl font-bold text-4xl">
                    Related Products
                  </h1>
                  <ProductCetegore category={item.category} className="mt-4"/>
                </div>
              </section>
            );
          })}
    </div>
  );
};
export default productDetail;
