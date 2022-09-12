import { createSlice } from '@reduxjs/toolkit';
import axiosTMDB from 'utils/axios';

const initialState = {
  shows: [],
  error: null,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    getShows: (state, action) => {
      state.shows = action.payload;
      state.error = null;
    },
    failedGetShows: (state, action) => {
      state.shows = [];
      state.error = action.payload;
    },
  },
});

export const { getShows, failedGetShows } = showsSlice.actions;

export const thunkShows = () => (dispatch) => {
  axiosTMDB.get('tv/popular').then((res) => res.data.results).then((result) => dispatch(getShows(result))).catch((error) => failedGetShows(error));
};

export default showsSlice.reducer;
