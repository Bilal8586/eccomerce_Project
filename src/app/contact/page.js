'use client'
const contact = () => {
    const handelSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
         <div className="w-[600px] h-[500px] bg-slate-200 shadow-xl gap-2 flex flex-col  justify-center items-center">

    <form onSubmit={handelSubmit}>
      <div className=" w-[600px] h-[600px] bg-slate-200 flex gap-2 flex-col items-center mx-auto mt-10 pt-10 rounded-xl shadow-xl">
        <label className=" text-3xl">Name</label>
        <input className=" font-medium  border-black  w-[400px] rounded-3xl
                            p-4 outline-0 focus-within:outline-blue-400" />
        <label className=" text-3xl">Email</label>
        <input className=" font-medium  border-black  w-[400px] rounded-3xl
                            p-4 outline-0 focus-within:outline-blue-400"/>
        <label className=" text-3xl">Message</label>
        <input className=" font-medium  border-black h-[150px]  w-[400px] rounded-3xl
                            p-4 outline-0 focus-within:outline-blue-400" type="textarea" />
        <input className=" shadow-lg w-[195px] h-[46px] mt-12 rounded-3xl  border-[1px] border-gray-400 hover:bg-slate-100 cursor-pointer"  type="submit" />
      </div>
    </form>
    </div>
    </div>
  );
};

export default contact;
