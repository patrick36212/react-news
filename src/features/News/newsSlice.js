import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    countryCode: null,
    articles: [],
  },
  reducers: {
    setCountryCode: (state, { payload: code }) => {
      state.countryCode = code;
    },
    setArticles: (state, { payload: articles }) => {
      state.articles = articles;
    },
  },
});

export const { setCountryCode, setArticles } = newsSlice.actions;

export const selectCountryCode = (state) => state.news.countryCode;
export const selectArticles = (state) => state.news.articles;

export default newsSlice.reducer;
