"use client";
import { useDispatch, useSelector } from "react-redux";
import { addUserId, deleteAsyn, fetchItemsAsyn, upDataItemAsyn } from "@/redux/feature/cart/cartSlice";
import Link from "next/link";
import { useEffect } from "react";
import { fetchCartItems } from "@/redux/feature/cart/cartApi";


const product = () => {
  const data = useSelector((state) => state.item);
  const dispatch = useDispatch()

  
  const handelChange = (e, id) => {
    dispatch(upDataItemAsyn({ id, updatedValue: { Quntity: e.target.value } }));
  };
  


  const total =
    data.items?.length > 0 &&
    data.items?.filter((el)=>el?.userId == data.userId).reduce((acc, item) => acc + item.price * item.Quntity, 0);

  return (
    <div
      className=" w-[1200px] m-auto h-[100vh]"
    >
      <div>
        <h1>total Price ${total}</h1>
      </div>

      {data.items?.length > 0 &&
        data.items?.filter((el)=>el.userId == data?.userId).map((item) => {
          return (      
            <div  key={item?.id}>
              <div
                className="flex  border-b mt-10 justify-between     "
               
              >
                <div>
                  <div>
                    <img
                      className=" h-[100px] w-[110px]"
                      src={item?.images[0]}
                    />
                  </div>
                </div>
                <div className=" ">
                  <h2 className=" p-0 m-0 w-[200px]">{item?.title}</h2>
                  <h3 className="p-0 m-0">${item?.price + 100}</h3>
                </div>
                <div className=" text-right">
                  <select
                    value={item.Quntity}
                    onChange={(e) => handelChange(e, item.id)}
                    className=" border-2 border-black  shadow-md cursor-pointer"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
                <button
                  onClick={() => dispatch(deleteAsyn(item.id))}
                  className=" w-[160px] h-[3rem] hover:border-orange-600  hover:border-[1px] mt-1 bg-orange-600 rounded-3xl hover:bg-white hover:text-orange-600 p-2 text-white "
                >
                  Delete Item
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default product;
