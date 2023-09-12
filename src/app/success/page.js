import Link from "next/link"
const SuccessPage =()=>{
    return (
        <div className="md:w-[1200px] mx-auto text-center">
            <h1 className=" text-3xl">Thank You </h1>
            <Link href={''} className="text-blue-500">continue shopping</Link>
        </div>
    )
}
export default SuccessPage