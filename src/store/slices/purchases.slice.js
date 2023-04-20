import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const purchasesSlice = createSlice({
  name: "purchases",
  initialState: [],
  reducers: {
    setPurchases: (state, action) => {
      return action.payload;
    }
  }
});

export const getFavoritesThunk = () => (dispatch) => {
  axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
    .then((resp) => {
      dispatch(setPurchases(resp.data))
      console.log(resp.data)
    })
    .catch((error) => console.error(error));
};

export const createFavoriteThunk = (data) => (dispatch) => {
  axios
    .post(
      "https://e-commerce-api-v2.academlo.tech/api/v1/cart",
      data,
      getConfig()
    )
    .then( () => dispatch(getFavoritesThunk()))
    .catch((error) => {
      if(error.response?.status === 403){
        alert("Ese producto ya existe en el carrito")
      }else{
        
        console.log(error.response?.data)
      }
    });
};

// export const cartCheckoutThunk = () => (dispatch) => {
//   axios
//     .post(
//       "https://e-commerce-api-v2.academlo.tech/api/v1/purchases",
//       {},
//       getConfig()
//     )
//     .then(() => dispatch(getFavoritesThunk()))
//     .catch((error) => console.error(error));
// };

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
