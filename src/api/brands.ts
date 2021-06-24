import { useEffect, useState } from "react";
import fetcher from "./fetcher";

export interface Brand {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}

export function useBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async function getBrands() {
      const brands = await fetcher<Brand[]>("/companies");
      setBrands(brands);
    })();
  }, []);

  return brands;
}
