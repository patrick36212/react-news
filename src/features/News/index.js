import Main from "../../components/Main";
import NewsList from "../../components/NewsList";
import { useQuery } from "react-query";
import { getCountryNews } from "./getCountryNews";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCountryCode } from "./newsSlice";

const News = () => {
  const [articles, setArticles] = useState([]);
  const countryCode = useSelector(selectCountryCode);

  const { data } = useQuery(["countryNews", countryCode], () => {
    if (!!countryCode) {
      return getCountryNews(countryCode);
    }
  });

  useEffect(() => {
    if (!!data) {
      setArticles(data.articles);
    }
  }, [data]);

  return <Main>{!!data && <NewsList data={articles} />}</Main>;
};

export default News;
