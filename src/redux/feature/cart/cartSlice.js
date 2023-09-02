"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItems, deletItems, fetchCartItems, upDataItems } from "./cartApi";
import { useSession } from "next-auth/react";

const initialState={
    items:[],
    status:'idle',
    like:0,
    userId:'',
    userStatus:''
}

export const fetchItemsAsyn = createAsyncThunk(
    'fetchItemsAsyn',
    async()=>{
       
        const response= await fetchCartItems()
        return response.data
    }
)


export const addItemsAsyn= createAsyncThunk(
    'addItemsAsyn',
    async(items)=>{
        const id=Math.random()+1
        const {userId}=items
        const {title,price,images}=items.items
        const {productId} = items
        
        const response = await addItems({id,title,price,images,Quntity:1,userId,productId})
        return response.data
    }
)



export const deleteAsyn= createAsyncThunk(
    'deleteAsyn',
    async(id)=>{
         await deletItems(id)
         return id
    }
)

export const upDataItemAsyn = createAsyncThunk(
    'upDataItemAsyn',
    async({id,updatedValue})=>{
        const response = await upDataItems(id,updatedValue)
        // console.log('response',response)
        return response.data
    }
)
const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        increment:(state)=>{
            state.like +=1 
            // console.log('likesffgf',state.like)
        },
        addUserId:(state,action)=>{
            // console.log('action.playlod',action.payload)
            state.userId=action.payload
        },
        addUserStatus:(state,action)=>{
            state.userStatus=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchItemsAsyn.rejected,(state,action)=>{
            console.log('fetchItemsAsyn rejected')
        })
        .addCase(fetchItemsAsyn.fulfilled,(state,action)=>{
            state.items=action.payload
            
        })
        .addCase(addItemsAsyn.rejected,(state,action)=>{
            console.log('addItemsAsyn rejected')

        })
        .addCase(addItemsAsyn.fulfilled,(state,action)=>{
            state.items.push(action.payload)
        })
        .addCase(deleteAsyn.rejected,(state,action)=>{
            console.log('deleteAsyn rejected')

        })
        .addCase(deleteAsyn.fulfilled,(state,action)=>{
            const index = state.items.findIndex((element)=> element.id === action.payload )
            // console.log('index',index)
            // console.log('action',action.payload)
            state.items.splice(index,1)
        })
        .addCase(upDataItemAsyn.rejected,(state,action)=>{
            console.log('upDataItemAsyn')
        })
        .addCase(upDataItemAsyn.pending,(state,action)=>{
            console.log("upDataItemAsyn is panding")
        })
        .addCase(upDataItemAsyn.fulfilled,(state,action)=>{
            const index = state.items.findIndex((el)=> el.id === action.payload.id)
            state.items.splice(index,1,action.payload)
        })
        
    }
})

export default cartSlice.reducer
export const {increment,addUserId,addUserStatus} = cartSlice.actions