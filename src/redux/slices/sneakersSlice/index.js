import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSneakers = createAsyncThunk('sneakers/fetchSneakereStatus', async (params) => {
  const { currentPage, ShortOrder, ShortSortBy } = params;
  const { data } = await axios.get(
    `https://644189e3792fe886a8aa1467.mockapi.io/items?page=${currentPage}&limit=4&sortBy=${ShortSortBy}&order=${ShortOrder}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchSneakers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSneakers.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchSneakers.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = sneakersSlice.actions;

export default sneakersSlice.reducer;
