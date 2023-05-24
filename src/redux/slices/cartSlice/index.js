import { createSlice } from '@reduxjs/toolkit';
import { totalPriceReduce } from '../../../utils/totalPriceReduce';
import { getCartFromLS } from '../../../utils/getCartFromLS';

const { items, totalPrice } = getCartFromLS();
const initialState = {
  items,
  totalPrice,
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
      state.totalPrice = totalPriceReduce(state.items);
    },
    toMinusCartItem: (state, action) => {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.size === action.payload.size,
      );

      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.items = state.items.filter(
            (obj) => !(obj.id === action.payload.id && obj.size === action.payload.size),
          );
        }
      }
      state.totalPrice = totalPriceReduce(state.items);
    },
    toRemoveCartItem: (state, action) => {
      state.items = state.items.filter(
        (obj) => !(obj.id === action.payload.id && obj.size === action.payload.size),
      );
      state.totalPrice = totalPriceReduce(state.items);
    },

    toClearCartItem: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { toAddCartItem, toRemoveCartItem, toMinusCartItem, toClearCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
