import Main from "../../components/Main";
import NewsList from "../../components/NewsList";
import { useQuery } from "react-query";
import { getCountryNews } from "./getCountryNews";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSelectedArticle,
  selectArticles,
  selectCountryCode,
  selectSelectedArticle,
  setArticles,
} from "./newsSlice";
import Popup from "../../components/Popup";
import { nanoid } from "@reduxjs/toolkit";

const News = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector(selectCountryCode);
  const articles = useSelector(selectArticles);
  const selectedArticle = useSelector(selectSelectedArticle);

  const { data } = useQuery(["countryNews", countryCode], () => {
    if (!!countryCode) {
      return getCountryNews(countryCode);
    }
  });

  useEffect(() => {
    if (!!data) {
      const articleList = data.articles;
      articleList.forEach((article) => (article.id = nanoid()));
      dispatch(setArticles(articleList));
    }
  }, [data, dispatch]);

  return (
    <Main>
      {articles.length === 0 && <p>Chose country for articles</p>}
      {!!data && <NewsList data={articles} />}
      {!!selectedArticle && (
        <Popup
          news={selectedArticle}
          handleClose={() => dispatch(closeSelectedArticle())}
        />
      )}
    </Main>
  );
};

export default News;
