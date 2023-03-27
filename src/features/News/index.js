import Main from "../../components/Main";
import NewsList from "../../components/NewsList";
import { useQuery } from "react-query";
import { getCountryNews } from "./getCountryNews";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, selectCountryCode, setArticles } from "./newsSlice";

const News = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector(selectCountryCode);
  const articles = useSelector(selectArticles);

  const { data } = useQuery(["countryNews", countryCode], () => {
    if (!!countryCode) {
      return getCountryNews(countryCode);
    }
  });

  useEffect(() => {
    if (!!data) {
      dispatch(setArticles(data.articles));
    }
  }, [data, dispatch]);

  return (
    <Main>
      {articles.length === 0 && <p>Chose country for articles</p>}
      {!!data && <NewsList data={articles} />}
    </Main>
  );
};

export default News;
