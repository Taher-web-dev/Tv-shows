import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: 'Start searching' };

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        shownoResults: (state, action) => {
            state.message = `No results for your query ${action.payload}`;
        },
        showapiError: (state, action) => {
            state.message = action.payload;
        },
        callTosearch: (state) => {
            state.message = 'Start searching';
        },
        shownoMessage: (state) => {
            state.message = ''
        }
    }
});

export const { shownoResults, showapiError, callTosearch, shownoMessage } = messageSlice.actions;

export default messageSlice.reducer;