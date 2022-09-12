import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import showsReducer from "./showTv.slice";
import messageReducer from "./message.slice";
import keywordReducer from "./keyWord.slice";
import currentTvReducer from "./currentTv.slice";

const rootReducer = {
  theme: themeReducer,
  shows: showsReducer,
  message: messageReducer,
  keyword: keywordReducer,
  currentTv: currentTvReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
