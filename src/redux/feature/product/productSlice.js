
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProdut } from "@/redux/feature/product/productApi";

const initialState ={
    products:[],
    isLoding:true,
    page:1
}

 export const fetchDataAsy = createAsyncThunk(
    'fetchDataAsy',
    async()=>{
        const response = await fetchProdut()
        return response.data
    }
)


const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
            setPage :(state,action)=>{
                    state.page = action.payload
            },
            
            
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchDataAsy.rejected,(state,action)=>{
            console.log('rejected',state.products)
        })
        .addCase(fetchDataAsy.fulfilled,(state,action)=>{
            // console.log('action.palyload',action.payload[0].products)
            state.products = action.payload
            state.isLoding =false
        })
      
      
    }

})
export default productSlice.reducer
export const {setPage} = productSlice.actions