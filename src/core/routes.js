import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import GeoCountryNews from "../features/GeoCountryNews";
import ChosenCountryNews from "../features/ChosenCountryNews";
import ChosenArticle from "../features/ChosenArticle";

export const mainPage = "/news";
export const countryPath = "/news/:countryCode";
export const article = "/news/:countryCode/:articleId";

export const routes = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={mainPage} element={<GeoCountryNews />} />
      <Route path={countryPath} element={<ChosenCountryNews />} />
      <Route path={article} element={<ChosenArticle />} />
      <Route path="/" element={<Navigate to={mainPage} />} />
    </>
  )
);
