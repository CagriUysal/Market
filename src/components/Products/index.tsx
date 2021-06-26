import styled from "styled-components";

import ItemTypes from "../ItemTypes";
import ProductList from "./ProductList";
import Pagination from "../Pagination";

function Products() {
  return (
    <ProductsContainer>
      <ProductTitle>Products</ProductTitle>
      <ItemTypes />
      <ProductList />
      <Pagination />
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  flex: 1 1 50%;
  margin: 0 2rem;
`;

const ProductTitle = styled.h2`
  color: #6f6f6f;
  font-weight: 400;
`;
