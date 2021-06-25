import { ItemType, Product } from "../api";
import { BrandsFilter } from "../app/reducers/brandsFilter";
import { TagsFilter } from "../app/reducers/tagsFilter";

interface FilterOptions {
  itemType: ItemType;
  brandsFilter: BrandsFilter;
  tagsFilter: TagsFilter;
}

export default function productFilter(
  product: Product,
  filterOptions: FilterOptions
) {
  const { itemType, manufacturer, tags } = product;
  const { itemType: targetItemType, brandsFilter, tagsFilter } = filterOptions;

  // item type doesn't match with the filter
  if (itemType !== targetItemType) return false;

  // All is not selected and brand doesn't match with the filter
  if (!brandsFilter.__ALL__ && !(manufacturer in brandsFilter)) return false;

  // All is not selected and none of the producst that included in tagsFilter
  if (!tagsFilter.__ALL__ && !productTagsIncluded(tags, tagsFilter)) {
    return false;
  }

  return true;
}

function productTagsIncluded(tags: string[], tagsFilter: TagsFilter) {
  for (const tag of tags) {
    if (tag in tagsFilter) return true;
  }

  return false;
}
