"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Allfileter from "@/components/filterCondition/allFilter";
import Rating from '@/components/starRatin'

const productD = ({ params }) => {
  const dispach = useDispatch();
  const productData = useSelector((state) => state.cart);
  const searchItems = useSelector((state) => state.searchItem);

  // console.log("serachItems",searchItems.searchCondition)
  // console.log("searchItems.searchPrice", searchItems.searchPrice + 1);
  // console.log("chekcFilter", searchItems.searchCondition.brand );
  return (
    <div className="p-0 m-0 flex">
      <div className=" w-[400px]">
        <div>
          <div className=" ml-6">
            <Allfileter className=" border-r-2 border-black" />
          </div>
        </div>
      </div>
      {searchItems.searchRating ? (
        <div>
          {productData.products &&
            productData.products
              .filter((element) => `${element.id}` === params.name)
              .map((item) => {
                return (
                  <Link href={`productD/${item.id}`}>
                    <div className=" m-10" key={item.id}>
                      <div>
                        <div className="flex ">
                          <div className=" w-[300px] h-[238px] bg-slate-200">
                            <img
                              className=" mx-auto w-[250px] h-full"
                              src={item.images[0]}
                            />
                          </div>
                          <div className=" ml-4">
                            <h3>{item.title}</h3>
                            <h4 className="flex items-center gap-1">{item.rating} < Rating rating={item.rating} /></h4>
                            <h3 className=" w-[1000px]">{item.description}</h3>
                            <div className="flex gap-2">
                              <h2>M.R.P ${item.price}</h2>

                              <h5 className=" line-through text-red-500">
                                {" "}
                                $
                                {(
                                  (item.price / 100) *
                                  item.discountPercentage
                                ).toFixed(2)}
                              </h5>
                              <h5>{item.discountPercentage}%</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          {productData.products &&
            productData.products
              .filter(
                (element) =>
                  element.brand === searchItems.searchCondition.brand
                 
              )
              .map((item) => {
                const check = `${item.id}` !== params.name;
                // console.log("check",check)
                return (
                  <div>
                    {check && (
                      <Link href={`productD/${item.id}`}>
                        <div className=" m-10" key={item.id}>
                          <div>
                            <div className="flex ">
                              <div className=" w-[300px] h-[238px] bg-slate-200">
                                <img
                                  className=" mx-auto w-[250px] h-full"
                                  src={item.images[0]}
                                />
                              </div>
                              <div className="">
                                <h3>{item.title}</h3>
                                <h4 className="flex items-center gap-1">{item.rating} < Rating rating={item.rating} /></h4>

                                <h3 className=" w-[1000px]">
                                  {item.description}
                                </h3>
                                <div className="flex gap-2">
                                  <h2>M.R.P ${item.price}</h2>

                                  <h5 className=" line-through text-red-500">
                                    {" "}
                                    $
                                    {(
                                      (item.price / 100) *
                                      item.discountPercentage
                                    ).toFixed(2)}
                                  </h5>
                                  <h5>{item.discountPercentage}%</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                );
              })}
        </div>
      ) : (
        <div>
          {productData.products &&
            productData.products
              .filter(
                (element) =>
                  (element.rating > +searchItems.searchPrice &&
                    element.brand === searchItems.searchCondition.brand||
                  element.brand === searchItems.searchPrice)
              )
              .map((item) => {
                // console.log("check",check)
                return (
                  <div>
                    {
                      <Link href={`productD/${item.id}`}>
                        <div className=" m-10" key={item.id}>
                          <div>
                            <div className="flex ">
                              <div className=" w-[300px] h-[238px] bg-slate-200">
                                <img
                                  className=" mx-auto w-[250px] h-full"
                                  src={item.images[0]}
                                />
                              </div>
                              <div className="">
                                <h3>{item.title}</h3>
                                <h4 className="flex items-center gap-1">{item.rating} < Rating rating={item.rating} /></h4>

                                <h3 className=" w-[1000px]">
                                  {item.description}
                                </h3>
                                <div className="flex gap-2">
                                  <h2>M.R.P ${item.price}</h2>

                                  <h5 className=" line-through text-red-500">
                                    {" "}
                                    $
                                    {(
                                      (item.price / 100) *
                                      item.discountPercentage
                                    ).toFixed(2)}
                                  </h5>
                                  <h5>{item.discountPercentage}%</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    }
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
};

export default productD;
