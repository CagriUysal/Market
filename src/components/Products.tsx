import styled from "styled-components";

import ItemTypes from "./ItemTypes";
import { useProducts } from "../api";
import { useAppSelector } from "../app/hooks";

function Products() {
  const itemType = useAppSelector((state) => state.itemType);
  const { products } = useProducts({ itemType });

  console.log(products);

  return (
    <ProductsContainer>
      <ProductTitle>Products</ProductTitle>
      <ItemTypes />
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  flex-grow: 2;
`;

const ProductTitle = styled.h2`
  color: #6f6f6f;
  font-weight: 400;
`;
