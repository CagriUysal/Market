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

// fake Brand for all brands
const __ALL__ = {
  slug: "__ALL__",
  name: "All",
  address: "",
  city: "",
  state: "",
  zip: "",
  account: 0,
  contact: "",
};

export function useBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async function getBrands() {
      const brands = await fetcher<Brand[]>("/companies");
      const brandsWithAll = [__ALL__, ...brands];

      setBrands(brandsWithAll);
    })();
  }, []);

  return brands;
}
