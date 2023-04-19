// Darle funcionalidad al carrito de compras
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const shopSlice = createSlice({
    name:"shop",
    initialState: [],
    reducers:{
        setShop : (state, action) =>{
            return action.payload
        }
    }
})

export const getShopThunk = () => (dispatch )=> {
    axios
    // Agregar token desde postman
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
        .then(resp = console.log(resp.data))
        .catch(error => console.error(error))
}

export const {setShop} = shopSlice.actions;

export default shopSlice.reducer;

// favorites.slice.js

// Cooregir shop.slice