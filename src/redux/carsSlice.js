import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAdvertById } from './operations.js';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favorites: [],
    currentItem: null,
    isLoading: false,
    error: null,
    isModalOpen: false,
  },
  reducers: {
    onModalOpen(state, action) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAdvertById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAdvertById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentItem = action.payload;
      })
      .addCase(fetchAdvertById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { onModalOpen } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
