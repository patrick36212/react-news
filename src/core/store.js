import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "../components/Header/LayoutButton/layoutSlice";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});

export default store;
