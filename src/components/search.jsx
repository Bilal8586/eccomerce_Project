"use client"
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchRating,
  setShow,
  storeCondition,
  setSerchItemValue0,
} from "@/redux/feature/search/searchSlice";
import Link from "next/link";

const search = () => {
  const items = useSelector((state) => state.searchItem);
  const show = useSelector((state) => state.searchItem.show);
  const productData = useSelector((state) => state.cart);
    const dispatch = useDispatch()
  const handelClick = (user) => {
    dispatch(setShow(false));
    dispatch(
      storeCondition({
        id: user.id,
        brand: user.brand,
        category: user.category,
      })
    );
    dispatch(setSearchRating(true));
    dispatch(setSerchItemValue0(""));
  };
  return (
    <div>
      {items.Value !== "" &&
        show &&
        productData.products
          .filter(
            (element) =>
              element.title.toLowerCase().includes(items.Value) ||
              element.brand.toLowerCase().includes(items.Value)
          )

          .map((user) => (
            <h3 key={user.id}>
              {" "}
              <Link href={`/${user.id}`} onClick={() => handelClick(user)}>
                {user.title}
              </Link>
            </h3>
          ))}
    </div>
  );
};

export default search;
