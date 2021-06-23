import axios from "axios";

import config from "../config";

// define base URL for fetching data,
// this will change for production and development
axios.defaults.baseURL = config.apiBaseUrl;

async function fetcher<T>(url: string) {
  const { data } = await axios.get<T>(url);

  return data;
}

export default fetcher;
