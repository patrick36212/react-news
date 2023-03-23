import { buildQuery } from "./buildQuery";
import { NEWS_API_KEY } from "./NEWS_API_KEY";

const API_URL = "https://newsapi.org/v2";
const API_KEY = NEWS_API_KEY;
export const fetchFromAPI = async ({ path, params }) => {
  const defaultParams = {
    apiKey: API_KEY,
  };

  const allParams = {
    ...defaultParams,
    ...(params || {}),
  };

  const response = await fetch(`${API_URL}${path}?${buildQuery(allParams)}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
