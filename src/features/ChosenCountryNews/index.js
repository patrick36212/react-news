import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getNewsData } from "../getNewsData";
import { Navigate } from "react-router-dom";
import { mainPage } from "../../core/routes";
import {
  selectArticles,
  selectCountryCode,
  selectSelectedArticle,
  selectPageHistory,
  selectPageNumber,
  clearSelectedArticle,
  setArticles,
  setSelectedArticle,
  setPageHistory,
  setPageNumber,
} from "../newsSlice";
import News from "../index";
import Section from "../../components/Section";
import NewsTile from "../../components/News";
import Loading from "../../components/Info/Loading";
import Error from "../../components/Info/Error";
import Pagination from "../../components/Pagination";

const ChosenCountryNews = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector(selectCountryCode);
  const articles = useSelector(selectArticles);
  const selectedArticle = useSelector(selectSelectedArticle);
  const pageHistory = useSelector(selectPageHistory);
  const pageNumber = useSelector(selectPageNumber);
  const [pageCode, setPageCode] = useState(null);

  const { data, isError, isLoading } = useQuery(
    ["countryNews", countryCode, pageCode],
    () => {
      if (!!countryCode) {
        return getNewsData(countryCode, pageCode);
      }
    }
  );

  useEffect(() => {
    if (!!data) {
      dispatch(setArticles(data.results));
      if (!pageHistory.some(({ pageCode }) => pageCode === data.nextPage))
        dispatch(
          setPageHistory({
            page: pageNumber + 1,
            pageCode: data.nextPage,
          })
        );
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (pageNumber > 1) {
      const currentPage = pageHistory.find(({ page }) => page === pageNumber);
      setPageCode(currentPage.pageCode);
    } else {
      setPageCode(null);
    }
  }, [pageNumber]);

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
        <>
          <Section
            sectionNews={articles.map((news, index) => (
              <NewsTile
                data={news}
                key={index}
                path={`/news/${countryCode}/${news.title}`}
                onClickFn={() => dispatch(setSelectedArticle(index))}
              />
            ))}
          />
          <Pagination
            disabledFn={pageNumber === 1}
            pageNumber={pageNumber}
            nextFn={() => dispatch(setPageNumber(pageNumber + 1))}
            backFn={() => dispatch(setPageNumber(pageNumber - 1))}
          />
        </>
      )}
    </News>
  );
};

export default ChosenCountryNews;
