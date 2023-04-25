import Loading from "../../components/Info/Loading";
import Error from "../../components/Info/Error";
import NewsList from "../../components/NewsList";
import Popup from "../../components/Popup";
import {
  closeSelectedArticle,
  selectArticles,
  selectCountryCode,
  selectSelectedArticle,
  setArticles,
} from "../newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getNewsData } from "../getNewsData";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import News from "../index";

const ChosenCountryNews = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector(selectCountryCode);
  const articles = useSelector(selectArticles);
  const selectedArticle = useSelector(selectSelectedArticle);

  const { data, isError, isLoading } = useQuery(
    ["countryNews", countryCode],
    () => {
      if (!!countryCode) {
        return getNewsData(countryCode);
      }
    }
  );

  useEffect(() => {
    if (!!data) {
      const articleList = data.articles;
      articleList.forEach((article) => (article.id = nanoid()));

      dispatch(setArticles(articleList));
    }
  }, [data, dispatch]);

  return (
    <News>
      {!!isLoading && <Loading />}
      {!!isError && <Error />}
      {!!data && <NewsList data={articles} />}
      {!!selectedArticle && (
        <Popup
          news={selectedArticle}
          handleClose={() => dispatch(closeSelectedArticle())}
        />
      )}
    </News>
  );
};

export default ChosenCountryNews;
