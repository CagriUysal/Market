import styled from "styled-components";

import { useProducts } from "../api";
import { useAppSelector } from "../app/hooks";
import productFilter from "../utils/productFilter";
import config from "../config";
import ProductItem from "./ProductItem";
import sortFactory from "../utils/sortFactory";

interface Props {
  page: number;
}

function ProductList({ page }: Props) {
  const products = useProducts();
  const { itemType, sortBy, brandsFilter } = useAppSelector(
    ({ itemType, sortBy, brandsFilter }) => ({
      itemType,
      sortBy,
      brandsFilter,
    })
  );

  const filterOptions = {
    itemType,
    brandsFilter,
  };

  const productsToBeDisplayed = products
    .filter((product) => productFilter(product, filterOptions))
    .sort(sortFactory(sortBy))
    .slice((page - 1) * config.itemsPerPage, page * config.itemsPerPage); // pagination

  console.log(productsToBeDisplayed);

  return (
    <Container>
      {productsToBeDisplayed.map((product) => (
        <ProductItem product={product} key={product.slug} />
      ))}
    </Container>
  );
}

export default ProductList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;

  padding: 1rem;
  margin-top: 1rem;
`;
