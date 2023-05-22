import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toAddCartItem: (state, action) => {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.size === action.payload.size,
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalCount += 1;
    },
    toRemoveCartItem: (state, action) => {
      state.items = state.items.filter();
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { toAddCartItem, clearCart, toRemoveCartItem } = cartSlice.actions;

export default cartSlice.reducer;
