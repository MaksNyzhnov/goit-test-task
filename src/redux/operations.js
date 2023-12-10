import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchAdverts = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const url = new URL(
        'https://64ff6eebf8b9eeca9e2a1fde.mockapi.io/adverts'
      );
      url.searchParams.append('completed', false);
      url.searchParams.append('page', page);
      url.searchParams.append('limit', 12);

      const response = await axios.get(url, (page = 1));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
