"use client";
import { useDispatch, useSelector } from "react-redux";
import { addItemsAsyn } from "../redux/feature/cart/cartSlice";
import ProductCetegore from "./productcategore";
import Rating from "./starRatin";
import Link from "next/link";
import PaginationPage from "./pagination";
import { toast } from "react-hot-toast";


const Product = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const data = useSelector((state) => state.item);
  return (
    <div className=" py-20 text-black bg-slate-100 w-full md:w-[1200px] mx-auto ">
      {state.isLoding ? (
        <h1 className=" text-center text-8xl font-normal">Loding...</h1>
      ) : (
        <div>
          <h1 className=" text-5xl m-[50px] text-center">All Products</h1>

          <div className=" grid  md:grid-cols-3  md:max-2xl:w-[full] gap-4 w-full justify-center md:max-2xl:mx-auto  ">
            {state.products.length > 0 &&
              state.products
                ?.slice(state.page * 6 - 6, 6 * state.page)
                .map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="shadow-lg bg-slate-100  rounded-3xl hover:scale-105  w-[320px] md:max-2xl:w-[366px] h-[460px] "
                    >
                      <div>
                        <Link href={`${"productD"}/${item.id}`}>
                          <div className="">
                            <img
                              className=" h-[21rem] w-full  rounded-3xl"
                              src={item.images[0]}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-4 pl-6 pt-2 ">
                              <h3 className="text-[15px]">{item.title}</h3>
                              <h3 className="flex items-center gap-1">
                                {item.rating}{" "}
                                <span>
                                  <Rating rating={item.rating} />
                                </span>
                              </h3>
                            </div>
                            <div>
                              <div className="flex gap-10 items-center pl-[23px] ">
                                <h4> Price ${item.price}</h4>
                                <span className=" line-through text-red-400">
                                  Off ${item.price + 100}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="text-center">
                          <button
                            onClick={() => {
                              if (data.userId !== "") {
                                const userId = data.userId;
                                toast.success('Item added')
                                return dispatch(
                                  addItemsAsyn({
                                    items: item,
                                    userId,
                                    Quntity:1,
                                    productId: item.id,
                                  })
                                );
                               
                              } else if (data.userId == "") {
                                alert("please login to add items");
                              }
                            }}
                            className=" w-[160px] hover:border-orange-600  hover:border-[1px] mt-1 bg-orange-600 rounded-3xl hover:bg-white hover:text-orange-600 p-2 text-white "
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>

          <PaginationPage />

          <div className=" pt-20">
            <h1 className=" text-center text-[40px]  ">SmartPhone</h1>
            <ProductCetegore category={"smartphones"} />
          </div>

          <div className=" pt-20">
            <h1 className=" text-center text-[40px]    ">Laptops</h1>

            <ProductCetegore category={"laptops"} />
          </div>

          <div className=" pt-20">
            <h1 className=" text-center text-[40px]  ">Fragrances</h1>

            <ProductCetegore category={"fragrances"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
