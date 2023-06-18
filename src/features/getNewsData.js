import { fetchFromAPI } from "../core/fetchFromAPI";

export const getNewsData = (countryCode, page) =>
  fetchFromAPI({
    path: "/news",
    params: {
      country: countryCode,
      page: page,
    },
  });
