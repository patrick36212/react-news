export const buildQuery = (params, initialQuery) => {
  const searchParams = new URLSearchParams(initialQuery);

  for (const key in params) {
    const value = params[key];

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
  }

  return searchParams.toString();
};
