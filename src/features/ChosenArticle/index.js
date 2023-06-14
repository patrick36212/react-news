import News from "../index";
import Article from "../../components/Article";
import { useSelector } from "react-redux";
import { selectSelectedArticle } from "../newsSlice";
import { Navigate } from "react-router-dom";
import { mainPage } from "../../core/routes";

const ChosenArticle = () => {
  const selectedArticle = useSelector(selectSelectedArticle);

  if (!selectedArticle) {
    return <Navigate to={mainPage} />;
  }

  return (
    <News>{!!selectedArticle && <Article article={selectedArticle} />}</News>
  );
};

export default ChosenArticle;
