import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import News from "../features/News";
import CountryNews from "../features/News/CountryNews";

export const initialPath = "/country";
export const countryPath = "/country/:name";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={initialPath} element={<News />} />
      <Route path={countryPath} element={<CountryNews />} />
      <Route path={"/"} element={<Navigate to={initialPath} />} />
    </>
  )
);
