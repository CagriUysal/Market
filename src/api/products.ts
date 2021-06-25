import { useState, useEffect } from "react";

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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async function getBrands() {
      const products = await fetcher<Product[]>("/items");
      setProducts(products);
    })();
  }, []);

  return products;
}
