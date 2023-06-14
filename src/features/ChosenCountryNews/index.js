import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getNewsData } from "../getNewsData";
import { Navigate } from "react-router-dom";
import { mainPage } from "../../core/routes";
import {
  selectArticles,
  selectCountryCode,
  selectSelectedArticle,
  clearSelectedArticle,
  setArticles,
  setSelectedArticle,
} from "../newsSlice";
import News from "../index";
import Section from "../../components/Section";
import NewsTile from "../../components/News";
import Loading from "../../components/Info/Loading";
import Error from "../../components/Info/Error";

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
      dispatch(setArticles(data.results));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (!!selectedArticle) {
      dispatch(clearSelectedArticle());
    }
  }, [selectedArticle, dispatch]);

  if (!countryCode) {
    return <Navigate to={mainPage} />;
  }

  return (
    <News>
      {!!isLoading && <Loading />}
      {!!isError && <Error />}
      {!!data && (
        <Section
          sectionNews={articles.map((news, index) => (
            <NewsTile
              data={news}
              key={index}
              path={`/news/${countryCode}/${index}`}
              onClickFn={() => dispatch(setSelectedArticle(index))}
            />
          ))}
        />
      )}
    </News>
  );
};

export default ChosenCountryNews;
