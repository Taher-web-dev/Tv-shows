import { createSlice } from '@reduxjs/toolkit';
import axiosTMDB from 'utils/axios';

const initialState = {
  data: {},
  error: null,
};

const currentShowSlice = createSlice({
  name: 'currentTv',
  initialState,
  reducers: {
    getCurrentShow: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    failedGetCurrentShow: (state, action) => {
      state.data = {};
      state.error = action.payload;
    },
  },
});

export const { getCurrentShow, failedGetCurrentShow } = currentShowSlice.actions;

export const thunkCurrentTvShow = (id) => (dispatch) => {
  axiosTMDB.get(`tv/${id}`).then((res) => res.data).then((result) => dispatch(getCurrentShow(result))).catch((error) => failedGetCurrentShow(error));
};

export default currentShowSlice.reducer;
