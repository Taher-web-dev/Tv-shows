import { createSlice } from "@reduxjs/toolkit";

const initialState = { text: '' };

const keywordSlice = createSlice({
    name: 'keyword',
    initialState,
    reducers: {
        changeKeyword: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const { changeKeyword } = keywordSlice.actions;

export default keywordSlice.reducer;