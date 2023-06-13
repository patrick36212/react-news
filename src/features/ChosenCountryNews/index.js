import Loading from "../../components/Info/Loading";
import Error from "../../components/Info/Error";
import News from "../index";
import { selectArticles, selectCountryCode, setArticles } from "../newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getNewsData } from "../getNewsData";
import { useEffect } from "react";
import Section from "../../components/Section";
import Tile from "../../components/Tile";
import { Navigate } from "react-router-dom";
import { mainPage } from "../../core/routes";

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
      dispatch(setArticles(data.results));
    }
  }, [data, dispatch]);

  if (!countryCode) {
    return <Navigate to={mainPage} />;
  }

  return (
    <News>
      {!!isLoading && <Loading />}
      {!!isError && <Error />}
      {!!data && (
        <Section
          sectionNews={articles.map((news) => (
            <Tile
              data={news}
              key={articles.indexOf(news)}
              path={`/news/${countryCode}/${articles.indexOf(news)}`}
            />
          ))}
        />
      )}
    </News>
  );
};

export default ChosenCountryNews;
