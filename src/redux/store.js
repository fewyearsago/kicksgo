import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import favorite from './slices/favoriteSlice';

export const store = configureStore({
  reducer: { favorite, cartSlice },
});
