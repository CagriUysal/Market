import { ItemType, Product } from "../api";
import { BrandsFilter } from "../app/reducers/brandsFilter";

interface FilterOptions {
  itemType: ItemType;
  brandsFilter: BrandsFilter;
}

export default function productFilter(
  product: Product,
  filterOptions: FilterOptions
) {
  const { itemType, manufacturer } = product;
  const { itemType: targetItemType, brandsFilter } = filterOptions;

  // item type doesn't match with the filter
  if (itemType !== targetItemType) return false;

  // All is not selected and brand doesn't match with the filter
  if (!brandsFilter.__ALL__ && !(manufacturer in brandsFilter)) return false;

  return true;
}
