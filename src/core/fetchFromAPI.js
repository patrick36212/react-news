import { buildQuery } from "./buildQuery";
import { NEWS_API_KEY } from "./NEWS_API_KEY";

const API_URL = "https://newsdata.io/api/1";
const API_KEY = NEWS_API_KEY;

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const fetchFromAPI = async ({ path, params }) => {
  const defaultParams = {
    apikey: API_KEY,
  };

  const allParams = {
    ...defaultParams,
    ...(params || {}),
  };

  await timeout(1000);

  const response = await fetch(`${API_URL}${path}?${buildQuery(allParams)}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
