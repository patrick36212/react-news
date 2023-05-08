import Loading from "../../components/Info/Loading";
import Error from "../../components/Info/Error";
import NewsList from "../../components/NewsList";
import Popup from "../../components/Popup";
import News from "../index";
import {
  closeSelectedArticle,
  selectArticles,
  selectCountry,
  selectSelectedArticle,
  setArticles,
  setFullData,
} from "../newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getNewsData } from "../getNewsData";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const ChosenCountryNews = () => {
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);
  const articles = useSelector(selectArticles);
  const selectedArticle = useSelector(selectSelectedArticle);

  const { data, isError, isLoading } = useQuery(
    ["countryNews", country],
    () => {
      if (!!country) {
        return getNewsData(country.code);
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
      {!!data && <NewsList country={country} data={articles} />}
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
