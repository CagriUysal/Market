if (process.env.REACT_APP_API_BASE_URL === undefined) {
  throw new Error("Please define `REACT_APP_API_BASE_URL` env. variable.");
}

const config = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
  itemsPerPage: Number(process.env.ITEMS_PER_PAGE) || 16,
};

export default config;
