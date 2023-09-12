"use client";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsyn, upDataItemAsyn } from "@/redux/feature/cart/cartSlice";
import Link from "next/link";
import { useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";
const stripePromise = loadStripe(process.env.stripe_public_key);
const product = () => {
  const data = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const [page, setpage] = useState(1);
  const userCart = data.items.filter((el, i) => el.userId == data.userId);

  const handelChange = (e, id) => {
    dispatch(upDataItemAsyn({ id, updatedValue: { Quntity: e.target.value } }));
  };

  const createSessionCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const chekcoutSession = await axios.post("/api/create-stripe-session", {
        items: userCart,
        email: data.userId,
      });
      stripe.redirectToCheckout({
        sessionId: chekcoutSession.data.session.id,
      });
    } catch (error) {
      console.log("chekcoutSession failed");
      console.log(error);
    }
  };
  const totala =  data.items?.length > 0 &&
  data.items
    ?.filter((el) => el?.userId == data.userId)
  const total =
    data.items?.length > 0 &&
    data.items
      ?.filter((el) => el?.userId == data.userId)
      .reduce((acc, item) => acc + item.price * item.Quntity, 0);
console.log('total',totala)
  return (
    <div className=" md:w-[1200px] w-full m-auto h-screen">
      <div>
        <h1>total Price ${ total}</h1>
        <button
          onClick={createSessionCheckout}
          className="w-[160px] h-[3rem] hover:border-orange-600  hover:border-[1px] mt-1 bg-orange-600 rounded-3xl hover:bg-white hover:text-orange-600 p-2 text-white "
        >
          ChechOut
        </button>
      </div>

      {data.items?.length > 0 &&
        data.items
          ?.filter((el) => el.userId == data?.userId)
          .slice(page * 6 - 6, 6 * page)
          .map((item) => {
            return (
              <div key={item?.id}>
                <div className="flex  border-b mt-10 justify-between items-center gap-3">
                  <div>
                    <div className="w-[147px]">
                      <Link href={`/productD/${item.productId}`}>
                        <img
                          className=" h-[100px] md:w-[110px] w-full"
                          src={item?.images[0]}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className=" ">
                    <h2 className=" p-0 m-0 md:w-[200px] w-[76px]">{item?.title}</h2>
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
                    className=" w-[160px] flex justify-center items-center text-2xl h-[3rem] hover:border-orange-600  hover:border-[1px] mt-1 bg-orange-600 rounded-3xl hover:bg-white hover:text-orange-600 p-2 text-white "
                  >
                   <RxCross1 />
                  </button>
                </div>
              </div>
            );
          })}

      <div className=" mx-auto flex md:w-[200px] w-[108px] pt-10 text-2xl">
        <button
          onClick={() => setpage(page == 1 ? 1 : page - 1)}
          className=" border-2"
        >
          <BsFillArrowLeftSquareFill />
        </button>

        {data.items?.length > 0 &&
          data.items.map((e, i) => {
            const check = i < userCart.length / 6;
            return (
              <div key={i}>
                {check && (
                  <div className="flex ">
                    <h3
                      onClick={() => setpage(i + 1)}
                      className={` ${
                        page === i + 1 ? "bg-white" : " bg-slate-500  "
                      } cursor-pointer w-[40px] border-2`}
                    >
                      {i + 1}
                    </h3>
                  </div>
                )}
              </div>
            );
          })}
        <button
          onClick={() => setpage(page >= userCart.length / 6 ? 1 : page + 1)}
          className=" border-2"
        >
          <BsFillArrowRightSquareFill />
        </button>
      </div>
    </div>
  );
};

export default product;
