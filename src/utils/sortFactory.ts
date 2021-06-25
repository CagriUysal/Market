import { Product } from "../api";
import { SortOptions } from "../app/reducers/sortBy";

export default function sortFactory(options: SortOptions) {
  const { order, sortingField } = options;

  return (a: Product, b: Product) =>
    order === "asc"
      ? a[sortingField] - b[sortingField]
      : b[sortingField] - a[sortingField];
}
