import { useState, useEffect } from "react";

import { Product, useProducts } from "../../api";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeTotalPages } from "../../app/reducers/page";
import config from "../../config";
import productFilter from "../../utils/productFilter";
import sortFactory from "../../utils/sortFactory";

function useDisplayProducts() {
  // fetch whole products for once
  const products = useProducts();

  // display options controled by multiple components
  const {
    itemType,
    sortBy,
    brandsFilter,
    tagsFilter,
    page: { currentPage },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  // multiple states defined to prevent unnecessary computation
  // e.g. changing `page` shouldn't require calculating filtering again
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filterOptions = {
      itemType,
      brandsFilter,
      tagsFilter,
    };

    setFilteredProducts(
      products.filter((product) => productFilter(product, filterOptions))
    );
  }, [itemType, brandsFilter, tagsFilter, products]);

  useEffect(() => {
    // NOTE: Array.prototype.sort, sorts the array in place,
    // thus we have copied the `filteredProducts` state
    setSortedProducts([...filteredProducts].sort(sortFactory(sortBy)));

    // changing filtering options means number of displayed pages will also changed.
    dispatch(changeTotalPages({ productsLength: filteredProducts.length }));
  }, [sortBy, filteredProducts, dispatch]);

  useEffect(() => {
    setPaginatedProducts(
      // human readable pagination starts with 1.
      sortedProducts.slice(
        (currentPage - 1) * config.itemsPerPage,
        currentPage * config.itemsPerPage
      )
    );
  }, [sortedProducts, currentPage]);

  return paginatedProducts;
}

export default useDisplayProducts;
