import { createSlice } from '@reduxjs/toolkit';
import axiosTMDB from 'utils/axios';

const initialState = {
  data: {},
  error: {},
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    getEpisodes: (state, action) => {
      const [id, tvData] = action.payload;
      if (!state.error[id]) {
        if (state.data[id]) state.data[id].push(tvData);
        else state.data[id] = [tvData];
      }
    },
    failedGetEpisodes: (state, action) => {
      const [id, tvError] = action.payload;
      if (state.data[id]) state.data[id] = [];
      state.error[id] = tvError;
    },
  },
});

export const { getEpisodes, failedGetEpisodes } = episodesSlice.actions;

export const thunkEpisodes = (id, episodeCount) => (dispatch) => {
  for (let i = 1; i <= episodeCount; i += 1) {
    axiosTMDB.get(`tv/${id}/season/1/episode/${i}`).then((res) => res.data).then((result) => dispatch(getEpisodes([id, result]))).catch((error) => failedGetEpisodes([id, error]));
  }
};
export default episodesSlice.reducer;
