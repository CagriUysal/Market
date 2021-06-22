import axios from "axios";

async function fetcher<T>(url: string) {
  const { data } = await axios.get<T>(url);

  return data;
}

export default fetcher;
