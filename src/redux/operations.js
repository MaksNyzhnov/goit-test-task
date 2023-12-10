import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchAdverts = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      'https://64ff6eebf8b9eeca9e2a1fde.mockapi.io/adverts'
    );
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const fetchFilteredAllCars = createAsyncThunk(
  'cars/fetchFiltered',
  async ({ make }, thunkAPI) => {
    const filter = make !== null && make;

    try {
      const url = new URL(
        'https://64ff6eebf8b9eeca9e2a1fde.mockapi.io/adverts'
      );
      url.searchParams.append('filter', filter);

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export { fetchAdverts, fetchFilteredAllCars };
