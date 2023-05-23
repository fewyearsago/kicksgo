import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentPage: 1,
  sortType: {
    name: 'Популярности',
    sortProperty: '-rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { setItems, setCurrentPage, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
