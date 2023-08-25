"use clinet"

import { configureStore } from "@reduxjs/toolkit";
import productReducer from './feature/product/productSlice'
import itemReducer from './feature/cart/cartSlice'
import searchReducer from './feature/search/searchSlice'

const Store=configureStore({
    reducer:{
        cart:productReducer,
        item:itemReducer,
        searchItem:searchReducer
    }
})

export default Store