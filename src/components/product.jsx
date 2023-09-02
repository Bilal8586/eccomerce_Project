"use client";

import { useDispatch, useSelector } from "react-redux";
import { addItemsAsyn } from "../redux/feature/cart/cartSlice";
import ProductCetegore from "./productcategore";
import Rating from "./starRatin";
import Link from "next/link";

const Product = () => {
  const dispatch = useDispatch();
  const [page, setpage] = useState(1);
  const state = useSelector((state) => state.cart);
  const data = useSelector((state) => state.item);

  return (
    <div className=" py-20 text-black bg-slate-100">
      {state.isLoding ? (
        <h1 className=" text-center text-8xl font-normal">Loding...</h1>
      ) : (
        <div>
          <h1 className=" text-5xl m-[50px] text-center ">All Products</h1>

          <div className=" grid grid-cols-3 gap-4 w-[1200px] mx-auto   ">
            {state.products.length > 0 &&
              state.products?.slice(page * 6 - 6, 6 * page).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="shadow-lg bg-slate-100  rounded-3xl hover:scale-105  w-[366px] h-[460px] "
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
                            <div className="flex gap-10 items-center pl-10 pt-3 ">
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
                              return dispatch(
                                addItemsAsyn({
                                  items: item,
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
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className=" mx-auto flex w-[200px]  pt-10">
            <button
              onClick={() => setpage(page == 1 ? 1 : page - 1)}
              className=" border-2"
            >
              pre
            </button>

            {state.products.length > 0 &&
              state.products
                .filter((e, i) => i < state.products.length / 6)
                ?.map((e, i) => {
                  return (
                    <div key={i}>
                      {
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
                      }
                    </div>
                  );
                })}
            <button
              onClick={() =>
                setpage(page == state.products.length / 6 ? 1 : page + 1)
              }
              className=" border-2"
            >
              next
            </button>
          </div>
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
