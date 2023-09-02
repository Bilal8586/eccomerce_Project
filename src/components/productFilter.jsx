import { useSelector } from "react-redux";
import Link from "next/link";
import Rating from "@/components/starRatin";

const productFilterpage = ({ param }) => {
  const productData = useSelector((state) => state.cart);
  const searchItems = useSelector((state) => state.searchItem);

  return (
    <div>
      {searchItems.searchRating ? (
        <div>
          {productData.products.length > 0 &&
            productData.products
              .filter((el) => {
                const product = el.id == param;

                return product;
              })
              .map((item) => {
                return (
                  <Link href={`productD/${item.id}`} key={item.id}>
                    <div className=" m-10">
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
                            <h4 className="flex items-center gap-1">
                              {item.rating} <Rating rating={item.rating} />
                            </h4>

                            <h3 className=" w-[1000px]">{item.description}</h3>
                            <div className="flex gap-2">
                              <h2>M.R.P ${item.price}</h2>

                              <h5 className=" line-through text-red-500">
                                $
                                {(
                                  (item.price / 100) *
                                  item.discountPercentage
                                ).toFixed(2)}
                              </h5>
                              <h5>{item.discountPercentage}% OFF</h5>
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
                (element) => element.brand === searchItems.searchCondition.brand
              )
              .map((item) => {
                const check = `${item.id}` !== param;
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
                                <h4 className="flex items-center gap-1">
                                  {item.rating} <Rating rating={item.rating} />
                                </h4>

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
                                  <h5>{item.discountPercentage}% OFF</h5>
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
        productData.products.length > 0 &&
        productData.products
          .filter((el) => {
            const product =
              searchItems.searchType == "category"
                ? el.category == searchItems.conditionFilter
                : searchItems.searchType == "rating"
                ? el.rating > searchItems.conditionFilter
                : el.price <= searchItems.conditionFilter ||
                  el.price >= searchItems.conditionFilter + 100;
            return product;
          })
          .map((item) => {
            return (
              <div>
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
                          <h4 className="flex items-center gap-1">
                            {item.rating} <Rating rating={item.rating} />
                          </h4>

                          <h3 className=" w-[1000px]">{item.description}</h3>
                          <div className="flex gap-2">
                            <h2>M.R.P ${item.price}</h2>

                            <h5 className=" line-through text-red-500">
                              $
                              {(
                                (item.price / 100) *
                                item.discountPercentage
                              ).toFixed(2)}
                            </h5>
                            <h5>{item.discountPercentage}% OFF</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
      )}
    </div>
  );
};
export default productFilterpage;
