import { fetchFromAPI } from "../../../core/fetchFromAPI";

export const getCountryNews = (countryCode) =>
  fetchFromAPI({
    path: "/top-headlines",
    params: {
      country: countryCode,
      pageSize: 100,
    },
  });
