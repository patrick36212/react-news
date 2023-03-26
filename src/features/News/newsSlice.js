import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    countryCode: null,
  },
  reducers: {
    setCountryCode: (state, { payload: code }) => {
      state.countryCode = code;
    },
  },
});

export const { setCountryCode } = newsSlice.actions;

export const selectCountryCode = (state) => state.news.countryCode;

export default newsSlice.reducer;
