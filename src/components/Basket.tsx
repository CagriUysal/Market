import styled from "styled-components";

import BasketItemList from "./BasketItemList";
import { useAppSelector } from "../app/hooks";

function Basket() {
  const { items, total } = useAppSelector((state) => state.basket);

  const basketIsNotEmpty = Object.values(items).length !== 0;

  return (
    <BasketContainer
      style={{ visibility: basketIsNotEmpty ? undefined : "hidden" }}
    >
      <>
        <BasketItemList items={items} />
        <Amount>{`₺${total.toFixed(2)}`}</Amount>
      </>
    </BasketContainer>
  );
}

export default Basket;

const BasketContainer = styled.div`
  flex: 1 0 25%;
  align-self: flex-start;

  border-radius: 2px;
  border: 0.5rem solid ${(props) => props.theme.colors.primary};
  background-color: #ffffff;
  padding: 1rem;
`;

const Amount = styled.div`
  width: 6rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 2px;
  padding: 1rem;

  float: right;
  margin-right: 5%;
`;
