"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import {toast} from 'react-hot-toast'
import { signIn } from "next-auth/react";


const loginPage = () => {
  const [user, setUser] = useState({ 
     email: "",
     password: "" 
    });
  const route = useRouter()

  const onLogin =async (e)=>{
    e.preventDefault() 
    try {
        const response = await axios.post('/api/login',user)
        console.log(response.data)
        toast.success('Login successful')
        route.push('/')
    } catch (error) {
        console.log(error,'login failed')
        toast.error(error.response?.data?.error);
        
    }
  }
  return (
       <div className="flex justify-center items-center w-full h-[100vh]">
         <div className="w-[600px] h-[500px] bg-slate-200 shadow-2xl gap-2 flex flex-col rounded-3xl justify-center items-center">
         <button
          className="w-[400px] flex items-center justify-center gap-3  h-[55px] shadow-2xl border-[1px] text-[26px] border-white bg-white hover:bg-white rounded-3xl"
          onClick={()=>signIn('google')}
        >
         <span><FcGoogle /> </span>  Login with Google
        </button>

           <form onSubmit={onLogin} className="flex flex-col gap-2 items-center">
            <label htmlFor="email" className=" text-3xl">Email</label>
            <input
                className=" font-medium  border-black  w-[400px] rounded-3xl
                            p-4 outline-0 focus-within:outline-blue-400"
                type="email"
                required
                autoComplete="none"
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email:e.target.value })}
            />

            <label htmlFor="password" className="text-3xl">Password</label>
            <input
               className=" font-medium border-black  w-[400px] rounded-3xl
               p-4 outline-0 focus-within:outline-blue-400"
                required
                type="password"
                autoComplete="none"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password:e.target.value })}
            />
            <input 
             className="w-[198px] cursor-pointer mt-2 h-[55px] shadow-2xl border-[1px] text-[26px] border-white  hover:bg-white rounded-3xl"
             type="submit"
             value='Login'
           ></input>
</form>
              <div>
                <h1 className=" text-2xl mt-4">Create account <span className=" border-b-2 border-blue-600"><Link href='/signup'>signup</Link></span></h1>
              </div>
        </div>
       </div>
  );
};

export default loginPage;
