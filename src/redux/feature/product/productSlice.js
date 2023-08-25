
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProdut } from "@/redux/feature/product/productApi";

const initialState ={
    products:[],
    isLoding:true
}

 export const fetchDataAsy = createAsyncThunk(
    'fetchDataAsy',
    async()=>{
        const response = await fetchProdut()
         console.log('data.response',response.data)
        return response.data
    }
)


const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

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