import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "../components/Header/LayoutButton/layoutSlice";
import newsReducer from "../features/News/newsSlice";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    news: newsReducer,
  },
});

export default store;
