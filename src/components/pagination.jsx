import { setPage } from "@/redux/feature/product/productSlice";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const paginationPage = () => {
    const state = useSelector((state) => state.cart);
    const dispatch = useDispatch()

  return (
    <div>
         <div className=" md:mx-auto flex w-[190px] mx-auto   pt-10">
            <button
              onClick={() => dispatch(setPage(state.page == 1 ? 1 : state.page - 1))}
              className=" border-2 text-3xl"
            >
              <BsArrowLeftSquareFill />
            </button>
            
      {state.products.length > 0 &&
        state.products
          .filter((e, i) => i < state.products.length / 16)
          ?.map((e, i) => {
            return (
              <div key={i} className={state.page == i + 1 ? `flex` : `hidden`}>
                {
                  <div className="flex w-full ">
                    <h3
                      className={` ${
                        state.page === i ? "bg-white" : " bg-slate-500  "
                      } cursor-pointer w-[40px] border-2`}
                    >
                      {i}
                    </h3>

                    <h3
                      className={` ${
                        state.page === i + 1 ? "bg-white" : " bg-slate-500  "
                      } cursor-pointer w-[40px] border-2`}
                    >
                      {i + 1}
                    </h3>
                    <h3
                      className={` ${
                        state.page === i + 2 ? "bg-white" : " bg-slate-500  "
                      } cursor-pointer w-[40px] border-2`}
                    >
                      {i + 2}
                    </h3>
                  </div>
                }
              </div>
            );
          })}
          
          <button
              onClick={() =>
                dispatch(setPage(state.page >= state.products.length / 16 ? 1 : state.page + 1))
              }
              className=" border-2 text-3xl"
            >
              <BsArrowRightSquareFill />
            </button> 
          </div>
    </div>
  );
};

export default paginationPage;
