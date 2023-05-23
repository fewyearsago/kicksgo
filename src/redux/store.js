import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import favorite from './slices/favoriteSlice';
import filter from './slices/filtersSlice';

export const store = configureStore({
  reducer: { favorite, cartSlice, filter },
});
