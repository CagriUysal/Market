import styled from "styled-components";

import ItemTypes from "./ItemTypes";
import { useProducts } from "../api";

function Products() {
  const { products } = useProducts();

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
