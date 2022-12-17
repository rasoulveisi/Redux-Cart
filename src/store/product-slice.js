import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    replaceProduct(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
