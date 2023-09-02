const { createSlice } = require("@reduxjs/toolkit");
const initialState ={
    Value :"",
    show:true,
    searchCondition:'',
    conditionFilter:0,
    searchRating:true,
    searchType:'id'
   
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
        conditionFilters:(state,action)=>{
            state.conditionFilter= action.payload
        },
        setSearchRating:(state,action)=>{
            state.searchRating= action.payload 
        },
        setSerchItemValue0:(state,action)=>{
            state.Value=action.payload
        },
        setSerachType:(state,action)=>{
            state.searchType=action.payload
        }
       
    }
})

export default searchSlice.reducer
export const {Add,setShow,storeCondition,conditionFilters,setSearchRating,setSerchItemValue0,setSerachType} = searchSlice.actions