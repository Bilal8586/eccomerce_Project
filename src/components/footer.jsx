import Link from "next/link"
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs"

const footerPage =()=>{
    return(
        <div className="w-full bg-slate-200 h-[400px] p-20  ">
            <div className=" flex items-center gap-5">
                    <label className="text-2xl" htmlFor="email">Email</label>
                    <input type="email" className=" font-medium  border-black  w-[400px] rounded-xl
                 p-4 outline-0 focus-within:outline-blue-400 ml-4" />
                 <button className="shadow-2xl py-[9px] px-[25px] border-[1px] text-[19px] border-white bg-white hover:bg-black hover:text-white rounded-xl">Submit</button>
                </div>
            <div className=" flex gap-3 mt-10">
                
                <div>
                    <ul>
                        <Link href='/'>Products</Link>
                    </ul>
                </div>
                <div>
                    <ul className="flex gap-2 flex-row">
                        <Link href='/contact'>Conatct</Link>
                        <Link href='about'>About</Link>
                    </ul>
                </div>
                <div>
                    <ul className=" text-4xl text-black flex gap-2 flex-row">
                        <Link href='/' className=" hover:text-white"><BsInstagram/></Link>
                        <Link href='/' className=" hover:text-white"><BsGithub/></Link>
                        <Link href='/' className=" hover:text-white"><BsFacebook/></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footerPage