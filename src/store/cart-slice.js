import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, totlaAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      // if item is not exist
      // push new item to the items
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          // category: newItem.category,
          description: newItem.description,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      // else
      // update total quantity and total price
      else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      // if it is the last item:
      // delete item from existing list
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      }
      // else
      // update total quantity and total price
      else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
