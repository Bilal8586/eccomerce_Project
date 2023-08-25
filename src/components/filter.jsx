import { priceCodition, setSearchRating } from "@/redux/feature/search/searchSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"



const filterItem =(props)=>{
    const dispatch = useDispatch()
    const handelChange=(e)=>{
        dispatch(priceCodition(e.target.value))
        dispatch(setSearchRating(false))
    }
    return(
        <div>
            <label>
                <input type="radio" name={props.test} value={props.value} className=" cursor-pointer"
                 onChange={(e)=>handelChange(e)}
                />
                {props.name}
            </label>
        </div>
    )
}
export  default filterItem