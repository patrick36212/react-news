import Loading from "../../components/Info/Loading";
import Error from "../../components/Info/Error";
import News from "../index";
import { selectArticles, selectCountryCode, setArticles } from "../newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getNewsData } from "../getNewsData";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import Section from "../../components/Section";
import Tile from "../../components/Tile";

const ChosenCountryNews = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector(selectCountryCode);
  const articles = useSelector(selectArticles);

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
    }
  }, [data, dispatch]);

  return (
    <News>
      {!!isLoading && <Loading />}
      {!!isError && <Error />}
      {!!data && (
        <Section
          title="Last 10"
          sectionNews={articles.map((news) => (
            <Tile data={news} key={news.id} />
          ))}
        />
      )}
    </News>
  );
};

export default ChosenCountryNews;
