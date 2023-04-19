// Darle funcionalidad al carrito de compras
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const purchasesSlice = createSlice({
    name:"purchases",
    initialState: [],
    reducers:{
        setPurchases : (state, action) =>{
            return action.payload
        }
    }
})

export const getPurchasesThunk = () => (dispatch )=> {
    axios
    // Agregar token desde postman
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
        .then(resp = console.log(resp.data))
        .catch(error => console.error(error))
}

export const {setPurchases} = purchasesSlice.actions;

export default purchasesSlice.reducer;

// favorites.slice.js

// Cooregir shop.slice