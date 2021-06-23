import styled from "styled-components";

import ItemTypes from "./ItemTypes";
import ProductList from "./ProductList";

function Products() {
  return (
    <ProductsContainer>
      <ProductTitle>Products</ProductTitle>
      <ItemTypes />
      <ProductList />
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  flex: 2 0 50%;
`;

const ProductTitle = styled.h2`
  color: #6f6f6f;
  font-weight: 400;
`;
