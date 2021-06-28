import useSWR from "swr";

import fetcher from "./fetcher";

export type ItemType = "mug" | "shirt";

export interface Product {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: ItemType;
}

export function useProducts() {
  const key = "/items";
  const { data, error } = useSWR(key, () => fetcher<Product[]>(key));

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
