
import Pricefilter from "./price"
import Brand from './brand'
import RatingFilter from "./rating"
const allfileter = ()=>{
     return(
        <div className="border-r-2 border-black w-[200px] h-[100vh]">
            <Pricefilter />
            <RatingFilter />
            <Brand className=" mt-7 "/>
        </div>
     )
}

export default allfileter