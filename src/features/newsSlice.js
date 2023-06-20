import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    countryCode: null,
    articles: [],
    selectedArticle: null,
    pageHistory: [{ page: 1, pageCode: null }],
    pageNumber: 1,
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
    setPageHistory: (state, { payload: page }) => {
      state.pageHistory.push(page);
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const {
  setCountryCode,
  setArticles,
  setSelectedArticle,
  clearSelectedArticle,
  setPageHistory,
  setPageNumber,
} = newsSlice.actions;

export const selectCountryCode = (state) => state.news.countryCode;
export const selectArticles = (state) => state.news.articles;
export const selectSelectedArticle = (state) => state.news.selectedArticle;
export const selectPageHistory = (state) => state.news.pageHistory;
export const selectPageNumber = (state) => state.news.pageNumber;

export default newsSlice.reducer;
