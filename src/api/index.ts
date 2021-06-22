import axios from "axios";

import config from "../config";

// define base URL for fetching data,
// this will change for production and development
axios.defaults.baseURL = config.apiBaseUrl;

export * from "./products";
