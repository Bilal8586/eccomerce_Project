"use client"

import { useState } from "react"
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

const heorBanner = ()=>{
    const [slide,setSlide]=useState(0)
    // console.log(slide)
    return(
        <div>
            <div className=" text-black grid grid-flow-col gap-[30rem] h-[70vh] w-[1200px] mb-[100px] mt-[50px] mx-auto relative overflow-hidden">
                <div style={{transform:`translateX(${slide*1200}px)` , transitionDuration:"0.3s"}} className=" w-[1200px]  bg-slate-500">
                    {/* <h1 className=" text-9xl" >page 1</h1> */}
                    <img className="w-full" src="https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>



                <div style={{transform:`translateX(${slide*1680}px)` , transitionDuration:"0.3s"}} className=" w-[1200px]  bg-slate-500">
                    {/* <h1 className=" text-9xl">page 2</h1> */}
                    <img className="w-full" src="https://1.bp.blogspot.com/-owDZBtWLm_M/Xe9nYuOlDzI/AAAAAAAAjBA/ojFAQ0Bq77Q-TWq7bkJdxLYw-4qzDdZfACLcBGAsYHQ/s2560/laptop_2-wallpaper-2560x1440.jpg" alt="" />
              </div>

                <div style={{transform:`translateX(${slide ==-2 ? -3361:-2000}px)` , transitionDuration:"0.3s"}} className=" w-[1200px]  bg-slate-500">
                    {/* <h1 className=" text-9xl">page 3</h1> */}
                    <img className="w-full" src="https://www.pixelstalk.net/wp-content/uploads/2016/05/Laptop-Wallpaers-HD.jpg" alt="" />
                    
                   </div>
                <button className=" absolute left-0 bottom-10 text-[40px] text-white" onClick={()=>setSlide(slide <= -2 ? 0:slide-1)}><BsFillArrowLeftCircleFill /></button>
                <button className=" absolute right-0 bottom-10 text-[40px] text-white" onClick={()=>setSlide(slide >=0 ?0:slide+1)}><BsFillArrowRightCircleFill /></button>
            </div>
        </div>
    )
}

export default heorBanner