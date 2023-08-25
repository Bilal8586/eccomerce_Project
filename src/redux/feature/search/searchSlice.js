const { createSlice } = require("@reduxjs/toolkit");
const initialState ={
    Value :"",
    show:true,
    searchCondition:'',
    searchPrice:0,
    searchRating:true
   
}

const searchSlice = createSlice({
    name:'search',
    initialState
   
        
,
    reducers:{
        Add:(state,action)=>{
            // console.log(action.payload)
            state.Value=(action.payload) 
        },
        setShow:(state,action)=>{
            // console.log("action.show",action.payload)

            state.show = (action.payload)
        },
        storeCondition:(state,action)=>{
            state.searchCondition = action.payload
        }
        ,
        priceCodition:(state,action)=>{
            state.searchPrice= action.payload
        },
        setSearchRating:(state,action)=>{
            state.searchRating= action.payload 
        },
        setSerchItemValue0:(state,action)=>{
            state.Value=action.payload
        }
       
    }
})

export default searchSlice.reducer
export const {Add,setShow,storeCondition,priceCodition,setSearchRating,setSerchItemValue0} = searchSlice.actions