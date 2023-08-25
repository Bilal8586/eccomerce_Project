"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter,redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Link from "next/link";
const singupPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const route = useRouter();
 
  const OnGooleSignup =async ()=>{
    signIn('google')
    
   
  }
  const Onsinup = async (e) => {
    e.preventDefault() 
     
    if (
      !user.username.length > 0 ||
      !user.email.length > 0 ||
      !user.password.length > 0
    ) {
      return toast.error("plase enter your details");
    } else {
      try {
        const reponse = await axios.post("/api/signup", user);
        console.log(reponse.data);
        toast.success('Signup Successful')
        route.push("/login");
      } catch (error) {
        console.log("singup failed");
        console.log(error);
        toast.error(error.response?.data.error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="w-[600px] h-[800px] bg-slate-200 shadow-2xl gap-2 flex flex-col rounded-3xl justify-center items-center">
      <button
          className="w-[400px] flex items-center justify-center gap-3 mb-24 h-[55px] shadow-2xl border-[1px] text-[26px] border-white bg-white hover:bg-white rounded-3xl"
          onClick={OnGooleSignup}
        >
         <span><FcGoogle /> </span> Sign up with Google
        </button>

        
      <form onSubmit={Onsinup} className="gap-2 flex flex-col items-center">
        <label htmlFor="username" className="text-3xl">
          Username
        </label>
        <input
          className=" font-medium  border-black  w-[400px] rounded-3xl
         p-4 outline-0 focus-within:outline-blue-400"
          type="text"
          required
          autoComplete="none"
          placeholder="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="email" className="text-3xl">
          Email
        </label>
        <input
          className=" font-medium  border-black  w-[400px] rounded-3xl
           p-4 outline-0 focus-within:outline-blue-400"
          type="email"
          required
          autoComplete="none"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label htmlFor="password" className="text-3xl">
          Password
        </label>
        <input
          className=" font-medium  border-black  w-[400px] rounded-3xl
           p-4 outline-0 focus-within:outline-blue-400"
          type="password"
          required
          autoComplete="none"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          className="w-[198px] mt-2 cursor-pointer h-[55px] shadow-2xl border-[1px] text-[26px] border-white  hover:bg-white rounded-3xl"
          type="submit"
          value='Signup'
         />
         </form>
        
        <h1 className=" text-2xl mt-4">Already have account <span className=" border-b-2 border-blue-600"><Link href='/login'>Login</Link></span></h1>

      </div>
    </div>
  );
};

export default singupPage;
