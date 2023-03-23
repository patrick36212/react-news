import Main from "../../components/Main";
import NewsList from "../../components/NewsList";
import { useQuery } from "react-query";
import { getCountryNews } from "./getCountryNews";
import { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const countryCode = "pl";

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
