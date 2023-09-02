
import { BsStarFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Link from "next/link";
import Rating from "./starRatin";
const productCetegore = (props) => {
    const state = useSelector((state) => state.cart);

    return (
        <div className=" ">


            <div className="grid grid-cols-5 p-[20px] gap-4 w-full rounded-lg mx-auto ">

                {state.products.length &&
                    state.products.filter((element) => element.category == props.category)
                        .map((item) => {
                            return (
                                <Link href={`/${'productD'}/${item.id}`} key={item.id}>

                                    <div  className="hover:scale-105 shadow-lg rounded-2xl w-[320px] bg-slate-100" >
                                        <div className=" h-[350px] bg-slate-100  rounded-2xl mx-auto">
                                            <div className=" h-[220px] rounded-lg"><img className=" rounded-2xl h-[212px] " src={item?.images[0]} alt="" /></div>
                                            <div className=" ml-[20px]">
                                                <h2>{item.title}</h2>
                                                <div>

                                             <h2 className="text-red-600 line-through">{item.discountPercentage}% OFF</h2>

                                                    <h2>Price ${item.price}</h2>
                                                    <h3 className="flex  items-center gap-1">Rating <span> < Rating rating={item.rating} /> </span>{item?.rating}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            )
                        })

                }

            </div>
        </div>
    )
}

export default productCetegore