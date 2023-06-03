import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import favorite from './slices/favoriteSlice';
import filter from './slices/filtersSlice';
import sneakers from './slices/sneakersSlice';

export const store = configureStore({
  reducer: { favorite, cartSlice, filter, sneakers },
});
