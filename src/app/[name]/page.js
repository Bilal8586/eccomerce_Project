"use client";
import Allfileter from "@/components/filterCondition/allFilter";
import ProductFIlterPage from "@/components/productFilter";
const productD = ({ params }) => {
  return (
    <div className="p-0 m-0 flex">
      <div className=" w-[400px]">
        <div>
          <div className=" ml-6">
            <Allfileter className=" border-r-2 border-black" />
          </div>
        </div>
      </div>
      <ProductFIlterPage param={params.name} />
    </div>
  );
};

export default productD;
