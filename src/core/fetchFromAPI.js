const API_URL = "https://newsapi.org/v2/top-headlines";

export const fetchFromAPI = async ({ path, params }) => {
  const defaultParams = {
    apiKey: "",
    country: "pl",
  };

  const allParams = {
    ...defaultParams,
    ...(params || {}),
  };

  const response = await fetch(``);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
