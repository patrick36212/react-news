import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import GeoCountryNews from "../features/GeoCountryNews";
import ChosenCountryNews from "../features/ChosenCountryNews";

export const geoCountryNews = "/news";
export const countryPath = "/news/country/:name";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={geoCountryNews} element={<GeoCountryNews />} />
      <Route path={countryPath} element={<ChosenCountryNews />} />
      <Route path="/" element={<Navigate to={geoCountryNews} />} />
    </>
  )
);
