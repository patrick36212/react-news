import { fetchFromAPI } from "../core/fetchFromAPI";

export const getNewsData = (countryCode) =>
  fetchFromAPI({
    path: "/news",
    params: {
      country: countryCode,
    },
  });
