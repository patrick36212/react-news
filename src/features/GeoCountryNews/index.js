import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import Error from "../../components/Info/Error";
import { useEffect } from "react";
import { selectCountryCode, setCountryCode } from "../newsSlice";
import { Navigate } from "react-router-dom";
import News from "../index";
const GeoCountryNews = () => {
  const dispatch = useDispatch();
  const countryCode = useSelector(selectCountryCode);

  const { data, isError } = useQuery(["geolocation"], () => {
    const checkGeoByIp = async () => {
      const resp = await fetch(`https://freeipapi.com/api/json`);

      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return await resp.json();
    };

    return checkGeoByIp();
  });

  useEffect(() => {
    if (!!data) {
      dispatch(setCountryCode(data.countryCode));
    }
  }, [data, dispatch]);

  if (!!countryCode) {
    return <Navigate to={`/news/${countryCode}`} />;
  } else {
    return <News>{!!isError && <h2>Search country for news</h2>}</News>;
  }
};

export default GeoCountryNews;
