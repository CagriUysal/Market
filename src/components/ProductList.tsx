import styled from "styled-components";

import { useProducts } from "../api";
import { useAppSelector } from "../app/hooks";
import ProductItem from "./ProductItem";

function ProductList() {
  const itemType = useAppSelector((state) => state.itemType);
  const { products, loading } = useProducts({ itemType });

  if (loading) return <p>loading..</p>;

  return (
    <Container>
      {products?.map((product) => (
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
