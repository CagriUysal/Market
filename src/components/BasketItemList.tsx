import styled from "styled-components";

import { BasketItems } from "../app/reducers/basket";
import BasketItem from "./BasketItem";

interface Props {
  items: BasketItems;
}

function BasketItemList({ items }: Props) {
  console.log(items);

  return (
    <Container>
      {Object.values(items).map((item) => (
        <BasketItem item={item} key={item.product.slug} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default BasketItemList;
