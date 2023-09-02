"use client";

import { addUserId, fetchItemsAsyn } from "@/redux/feature/cart/cartSlice";
import { Add, setShow } from "@/redux/feature/search/searchSlice";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsBookFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import SearchDiv from "./search";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [btna, setBtna] = useState(0);
  const dispatch = useDispatch();
  // const [logindata, setLoginData] = useState("");
  const data = useSelector((state) => state.item);
  // const { status, data: session } = useSession();

  const router = useRouter();

  // console.log('google login user',session?.user?.email)
  // login info
  // const getLoginuserData = async () => {
    // if (status == "authenticated") {
    //   return false;
    // }
    // if(status !== 'authenticated'){
    //   try {
    //     const response = await axios.get("/api/me");
    //     setLoginData(response.data.message);
        
    //   } catch (error) {
    //     console.log("getUser Data filed", error);
    //   }
    // }
    
  // };

  //  logout with emai and password user

  const onLogout = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/login");
    } catch (error) {
      console.log("signout failed", error);
    }
  };

  const hadelLogout = () => {
    if (data.userStatus == "User found") {
      onLogout();
      toast.success("Logout Successful");
    }
    dispatch(addUserId(''))
    if (data.userStatus === "authenticated") {
      signOut();
      router.push("/login");
      toast.success("Logout Successful");
    }
  };

  const handelChange = (e) => {
    dispatch(setShow(true));
    dispatch(Add(e.target.value));
  };
  // useEffect(() => {
  //   // dispatch(fetchItemsAsyn());
  //   // getLoginuserData();
  // }, []);

  return (
    <div className=" sticky top-0 z-10  border-b-2 border-black  bg-white">
      <div className=" bg-white relative  w-[1200px] mx-auto h-16  flex items-center justify-around  border-opacity-40s">
        <div>
          <div className=" text-2xl">
            {" "}
            <Link href="/home">
              <BsBookFill />
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <input
              type="text"
              onChange={(e) => handelChange(e)}
              className=" border-2 border-black py-1 px-8  rounded-3xl"
            />
          </div>
          <div className=" cursor-pointer  ml-2 text-2xl">
            <BsSearch />
          </div>
          <div className="absolute w-[500px] top-12 bg-white  ">
            <SearchDiv />
          </div>
        </div>
        <div className="flex">
          <ul className="flex text-black gap-3  text-xl relative ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/cart">
                <BsFillCartCheckFill />
                <span className=" text-white rounded-full right-[-10px]  text-center h-[24px] text-[16px] text-lg absolute top-[-17px] bg-red-600 ">
                  {
                   data?.items.filter((el)=>el?.userId ==data.userId ).length
                  }
                </span>
              </Link>
            </li>
          </ul>
          <div className=" ml-4">

          {data.userId !== "" ? (
            <button
              onClick={hadelLogout}
              onMouseEnter={() => setBtna(27)}
              onMouseLeave={() => setBtna(0)}
              className="bg-white  text-black  text-xl h-[28px] border-2 rounded-xl w-20 relative overflow-hidden"
            >
              {" "}
              <Link href="/login">
                <span
                  style={{ transform: `translateY(${-btna - 3}px)` }}
                  className={`w-full duration-100 bg-black text-white  left-0 absolute top-7  rounded-3xl`}
                >
                  Logout
                </span>
                <span
                  style={{ transform: `translateY(${btna}px)` }}
                  className={` w-full duration-100 absolute  left-0 top-[-2px]`}
                >
                  Logout
                </span>
              </Link>
            </button>
          ) : (
            <button
              onMouseEnter={() => setBtna(27)}
              onMouseLeave={() => setBtna(0)}
              className="bg-white  text-black  text-xl h-[28px] border-2 rounded-xl w-20 relative overflow-hidden"
            >
              {" "}
              <Link href="/login">
                <span
                  style={{ transform: `translateY(${-btna - 3}px)` }}
                  className={`w-full duration-100 bg-black text-white  left-0 absolute top-7  rounded-3xl`}
                >
                  Login
                </span>
                <span
                  style={{ transform: `translateY(${btna}px)` }}
                  className={` w-full duration-100 absolute  left-0 top-[-2px]`}
                >
                  Login
                </span>
              </Link>
            </button>
          )}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
