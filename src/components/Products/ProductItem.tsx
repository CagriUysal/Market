import styled from "styled-components";

import { Product } from "../../api";
import { useAppDispatch } from "../../app/hooks";
import { addItem } from "../../app/reducers/basket";

interface Props {
  product: Product;
}

function ProductItem({ product }: Props) {
  const { price, name } = product;

  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    dispatch(addItem(product));
  };

  return (
    <Container>
      <ProductBG>
        <ProductImage alt="product" src="https://via.placeholder.com/92" />
      </ProductBG>
      <Price>{`₺ ${price}`}</Price>
      <Name>{name}</Name>
      <AddButton onClick={handleAddClick}>Add</AddButton>
    </Container>
  );
}

export default ProductItem;

const Container = styled.div`
  flex: 1 0 25%;
  max-width: 8rem;
  margin-bottom: 3rem;

  position: relative;
`;

const ProductBG = styled.div`
  border: 1.17666px solid #f3f0fe;
  border-radius: 12px;
`;

const ProductImage = styled.img`
  margin: 1rem;
`;

const Price = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  font-size: 0.9rem;
`;

const Name = styled.p`
  color: #191919;
  font-size: 0.9rem;
  font-weight: 600;
`;

const AddButton = styled.button`
  width: 100%;
  cursor: pointer;

  border-width: 0;
  border-radius: 2px;

  color: #ffffff;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.primary};

  padding: 0.25rem 0;

  position: absolute;
  bottom: -2rem;
`;
