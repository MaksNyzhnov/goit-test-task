import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchFilteredAllCars } from './operations.js';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favorites: [],
    currentItem: null,
    filter: null,
    isLoading: false,
    error: null,
    isModalOpen: false,
  },
  reducers: {
    onModalOpen(state, action) {
      state.isModalOpen = !state.isModalOpen;
    },
    setCurrentItem(state, action) {
      state.currentItem = action.payload;
    },
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        advert => advert.id !== action.payload
      );
    },
    advertsFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(...action.payload);
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredAllCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchFilteredAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  onModalOpen,
  addToFavorites,
  removeFromFavorites,
  setCurrentItem,
  advertsFilter,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
