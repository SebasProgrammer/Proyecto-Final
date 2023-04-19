//REDUX
import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import isLoading from './slices/isLoading.slice'
import shop from './slices/shop.slice'

export default  configureStore({
    reducer: {
        products,
        isLoading,
        shop
    }
})