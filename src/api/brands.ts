import useSWR from "swr";

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
  const key = "/companies";
  const { data, error } = useSWR(key, () => fetcher<Brand[]>(key));

  return {
    // add the fake __ALL__ brand to the data for filtering purposes
    brands: data ? [__ALL__, ...data] : undefined,
    isLoading: !error && !data,
    isError: error,
  };
}
