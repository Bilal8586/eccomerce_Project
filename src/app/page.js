"use client";
import HeorBanner from "../components/hero";
import Product from "../components/product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserId,
  addUserStatus,
  fetchItemsAsyn,
} from "@/redux/feature/cart/cartSlice";
import { useSession } from "next-auth/react";
import { fetchDataAsy } from "@/redux/feature/product/productSlice";
import axios from "axios";

const home = () => {
  const { status, data: session } = useSession();
  const [loginCheck, setCheck] = useState("");
  const dispatch = useDispatch();

  const CheckUser = async () => {
    if (loginCheck.message !== "User found") {
      try {
        const response = await axios.get("/api/me");
        setCheck(response.data);
      } catch (error) {
        console.log("getUser Data filed", error);
      }
    }

    if (status == "authenticated") {
      dispatch(addUserStatus("authenticated"));
      dispatch(addUserId(session?.user?.email));
    }
    if (loginCheck.message == "User found") {
      dispatch(addUserId(loginCheck.data.email));
      dispatch(addUserStatus("User found"));
    }
  };

  useEffect(() => {
    dispatch(fetchItemsAsyn());
    dispatch(fetchDataAsy());
    CheckUser();
  }, [loginCheck, status]);

  return (
    <div>
      <HeorBanner />
      <Product />
    </div>
  );
};
export default home;
