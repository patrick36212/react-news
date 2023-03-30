import Loading from "../../../components/Info/Loading";
import Error from "../../../components/Info/Error";
import NewsList from "../../../components/NewsList";
import Popup from "../../../components/Popup";
import {
  closeSelectedArticle,
  selectArticles,
  selectCountryCode,
  selectSelectedArticle,
  setArticles,
} from "../newsSlice";
import Main from "../../../components/Main";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getCountryNews } from "./getCountryNews";
import { nanoid } from "@reduxjs/toolkit";
import Header from "../../../components/Header";
import SideMenu from "../../../components/SideMenu";
import Footer from "../../../components/Footer";
import { useEffect } from "react";

const CountryNews = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector(selectCountryCode);
  const articles = useSelector(selectArticles);
  const selectedArticle = useSelector(selectSelectedArticle);

  const { data, isError, isLoading } = useQuery(
    ["countryNews", countryCode],
    () => {
      if (!!countryCode) {
        return getCountryNews(countryCode);
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
    <>
      <Header />
      <SideMenu />
      <Main>
        {!!isLoading && <Loading />}
        {!!isError && <Error />}
        {!!data && <NewsList data={articles} />}
        {!!selectedArticle && (
          <Popup
            news={selectedArticle}
            handleClose={() => dispatch(closeSelectedArticle())}
          />
        )}
      </Main>
      <Footer />
    </>
  );
};

export default CountryNews;
