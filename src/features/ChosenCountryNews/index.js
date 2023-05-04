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
  setFullData,
} from "../newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getNewsData } from "../getNewsData";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import News from "../index";
import {useLocation} from "react-router";

const ChosenCountryNews = () => {
  const dispatch = useDispatch();
  const location = useLocation();
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
      const articleList = data.results;
      articleList.forEach((article) => (article.id = nanoid()));

      dispatch(setArticles(articleList));
      dispatch(setFullData(data));
    }
  }, [data, dispatch]);

  return (
    <News>
      {!!isLoading && <Loading />}
      {!!isError && <Error />}
      {!!data &&
      <>
        <h2>Latest news for {location.pathname.split("/")[3].replaceAll("%20", " ")}</h2>
        <NewsList data={articles} />
      </>}
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
