import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import productSlice from "./product-slice";

const store = configureStore({
  reducer: { cart: cartSlice, ui: uiSlice, product: productSlice },
});

export default store;
