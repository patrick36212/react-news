import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    countryCode: null,
    articles: [],
    selectedArticle: null,
  },
  reducers: {
    setCountryCode: (state, { payload: code }) => {
      state.countryCode = code;
    },
    setArticles: (state, { payload: articles }) => {
      state.articles = articles;
    },
    setSelectedArticle: (state, { payload: articleIndex }) => {
      state.selectedArticle = state.articles[articleIndex];
    },
    clearSelectedArticle: (state) => {
      state.selectedArticle = null;
    },
  },
});

export const {
  setCountryCode,
  setArticles,
  setSelectedArticle,
  clearSelectedArticle,
} = newsSlice.actions;

export const selectCountryCode = (state) => state.news.countryCode;
export const selectArticles = (state) => state.news.articles;
export const selectSelectedArticle = (state) => state.news.selectedArticle;

export default newsSlice.reducer;
