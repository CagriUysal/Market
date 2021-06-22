import useSWR from "swr";

import config from "../config";
import fetcher from "./fetcher";

export type ItemType = "mug" | "shirt";

interface Product {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: ItemType;
}

interface FetchOptions {
  page?: number;
  itemsPerPage?: number;
  itemType?: ItemType;
}

export function useProducts(fetchOptions: FetchOptions = {}) {
  const {
    page = 1,
    itemsPerPage = config.itemsPerPage,
    itemType = "mug",
  } = fetchOptions;

  const { data, error } = useSWR(
    `/items?_page=${page}&_limit=${itemsPerPage}&itemType=${itemType}`,
    (url) => fetcher<Product[]>(url)
  );

  return { products: data, error, loading: !data && !error };
}
