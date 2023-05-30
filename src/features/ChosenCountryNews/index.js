import Loading from "../../components/Info/Loading";
import Error from "../../components/Info/Error";
import News from "../index";
import {
  selectArticles,
  selectCountry,
  setArticles,
  setFullData,
} from "../newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getNewsData } from "../getNewsData";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import Section from "../../components/Section";
import Tile from "../../components/Tile";
import { Navigate } from "react-router-dom";
import { geoCountryNews } from "../../core/routes";

const ChosenCountryNews = () => {
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);
  const articles = useSelector(selectArticles);

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

  if (!country.code) {
    return <Navigate to={geoCountryNews} />;
  }

  return (
    <News>
      {!!isLoading && <Loading />}
      {!!isError && <Error />}
      {!!data && (
        <Section
          title="Last 10"
          sectionNews={articles.map((news) => (
            <Tile data={news} />
          ))}
        />
      )}
    </News>
  );
};

export default ChosenCountryNews;
