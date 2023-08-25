import { BsStar ,BsStarFill,BsStarHalf} from "react-icons/bs";


const rating =({rating})=>{
    const arr = Array.from('hello').map((e,i)=> {
        const num = i+0.5
        return (
            <div className="">
                {
                    rating >= i+1 ? <span className="bg-yellow-400"> <BsStarFill className="text-yellow-400" /></span> :  rating >= num ? 
                    <span className="bg-yellow-400 text-yellow-400"><BsStarHalf  className="text-yellow-400  "/> </span>: <span className="text-yellow-500  "><BsStar  /></span>
                }
            </div>
        )
    })

    return(
        <div className="flex">
            {arr}
        </div>
    )   
}
export default rating