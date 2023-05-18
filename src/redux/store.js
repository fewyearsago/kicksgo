import { configureStore } from '@reduxjs/toolkit';
import favorite from './slices/favoriteSlice';

export const store = configureStore({
  reducer: { favorite },
});
