import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isFavorite: false,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const trueItem = state.items.find((obj) => obj.id === action.payload.id);
      if (!trueItem) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      }
    },
  },
});

export const { addItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
