import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    country: {},
    fullData: null,
    articles: [],
    selectedArticle: null,
  },
  reducers: {
    setCountry: (state, { payload: country }) => {
      state.country = country;
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
  setCountry,
  setArticles,
  setSelectedArticle,
  closeSelectedArticle,
  setFullData,
} = newsSlice.actions;

export const selectCountry = (state) => state.news.country;
export const selectArticles = (state) => state.news.articles;
export const selectSelectedArticle = (state) => state.news.selectedArticle;
export const selectFullData = (state) => state.news.fullData;

export default newsSlice.reducer;
