import Main from "../../components/Main";
import NewsList from "../../components/NewsList";
import { useQuery } from "react-query";

const News = () => {
  const countryCode = "pl";

  const { data } = useQuery(["countryNews", countryCode], () => {
    if (!!countryCode) {
    }
  });

  return (
    <Main>
      <NewsList />
    </Main>
  );
};

export default News;
