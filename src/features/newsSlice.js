import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    countryCode: null,
    fullData: null,
    articles: [],
    selectedArticle: null,
  },
  reducers: {
    setCountryCode: (state, { payload: code }) => {
      state.countryCode = code;
    },
    setFullData: (state, { payload: data }) => {
      state.fullData = data;
    },
    setArticles: (state, { payload: articles }) => {
      state.articles = articles;
    },
    setSelectedArticle: (state, { payload: articleId }) => {
      const articleIndex = state.articles.findIndex(
        ({ id }) => id === articleId
      );
      state.selectedArticle = state.articles[articleIndex];
    },
    closeSelectedArticle: (state) => {
      state.selectedArticle = null;
    },
  },
});

export const {
  setCountryCode,
  setArticles,
  setSelectedArticle,
  closeSelectedArticle,
  setFullData
} = newsSlice.actions;

export const selectCountryCode = (state) => state.news.countryCode;
export const selectArticles = (state) => state.news.articles;
export const selectSelectedArticle = (state) => state.news.selectedArticle;
export const selectFullData = state => state.news.fullData;

export default newsSlice.reducer;
