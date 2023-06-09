import News from "../index";
import Section from "../../components/Section";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import Error from "../../components/Info/Error";
import { useEffect } from "react";
import {
  selectArticles,
  selectCountryCode,
  setArticles,
  setCountryCode,
} from "../newsSlice";
import { getNewsData } from "../getNewsData";
import Loading from "../../components/Info/Loading";
import Tile from "../../components/Tile";
import { nanoid } from "@reduxjs/toolkit";

const GeoCountryNews = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector(selectCountryCode);
  const articles = useSelector(selectArticles);

  const geolocationIp = useQuery(["geolocation"], () => {
    const checkGeoByIp = async () => {
      const resp = await fetch(`http://ip-api.com/json/`);

      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return await resp.json();
    };

    return checkGeoByIp();
  });

  useEffect(() => {
    if (!!geolocationIp.data) {
      dispatch(setCountryCode(geolocationIp.data.countryCode));
    }
  }, [geolocationIp, dispatch]);

  const { data, isError, isLoading } = useQuery(
    ["geoCountryNews", countryCode],
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

export default GeoCountryNews;
