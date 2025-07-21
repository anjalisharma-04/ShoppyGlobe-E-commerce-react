import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItem.find(item => item._id === action.payload._id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      state.cartItem = state.cartItem.filter(item => item._id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItem.find(item => item._id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItem.find(item => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const {
  addToCart,
  removeCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
