import { fetchFromAPI } from "../core/fetchFromAPI";

export const getNewsData = (countryCode) =>
  fetchFromAPI({
    path: "/top-headlines",
    params: {
      country: countryCode,
      pageSize: 100,
    },
  });
