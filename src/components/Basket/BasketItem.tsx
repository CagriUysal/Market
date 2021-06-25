import styled from "styled-components";

import {
  BasketItem as BasketItemType,
  addItem,
  removeItem,
} from "../../app/reducers/basket";
import { useAppDispatch } from "../../app/hooks";

interface Props {
  item: BasketItemType;
}

function BasketItem({ item }: Props) {
  const {
    product: { name, price },
    amount,
  } = item;

  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    dispatch(addItem(item.product));
  };

  const handleRemoveClick = () => {
    dispatch(removeItem(item.product));
  };

  return (
    <>
      <Container>
        <div>
          <Name>{name}</Name>
          <Price>{`₺${price}`}</Price>
        </div>

        <div>
          <IconButton onClick={handleRemoveClick}>-</IconButton>
          <Amount>{amount}</Amount>
          <IconButton onClick={handleAddClick}>+</IconButton>
        </div>
      </Container>
      <LineBreak />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p`
  color: #191919;
  font-size: 0.9rem;
`;

const Price = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: bold;
`;

const LineBreak = styled.hr`
  color: #f4f4f4;
`;

const IconButton = styled.button`
  border-width: 0;
  background-color: transparent;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
`;

const Amount = styled.span`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem;
  color: #ffffff;
  font-weight: bold;
`;

export default BasketItem;
