import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantiy: 0, totlaAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {},
    removeItemFromCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
