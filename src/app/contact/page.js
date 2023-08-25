'use client'
const contact = () => {
    const handelSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handelSubmit}>
      <div className=" w-[600px] h-[600px] bg-slate-200 flex gap-2 flex-col items-center mx-auto mt-10 pt-10 rounded-3xl shadow-xl">
        <label>Name</label>
        <input className=" rounded-3xl h-[30px] pl-2" type="text" />
        <label>Email</label>
        <input className=" rounded-3xl h-[30px] pl-2" type="email" />
        <label>Massage</label>
        <input className=" rounded-3xl h-[40px] pl-2" type="textarea" />
        <input className=" shadow-lg w-[195px] h-[46px] mt-12 rounded-3xl  border-[1px] border-gray-400 hover:bg-slate-100 cursor-pointer"  type="submit" />
      </div>
    </form>
  );
};

export default contact;
