import styled from "styled-components";

import { useAppSelector } from "../app/hooks";

function Header() {
  const { total } = useAppSelector((state) => state.basket);

  // fix floating point problems :(
  const fixedTotal = Math.abs(total).toFixed(2);

  return (
    <MarketHeader>
      <BasketAmount>
        <p>{`₺${fixedTotal}`}</p>
      </BasketAmount>
    </MarketHeader>
  );
}

export default Header;

const MarketHeader = styled.header`
  height: 4.75rem;
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const BasketAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  margin-right: 5%;

  background-color: #147594;
  height: 100%;
  width: 8rem;
  color: #ffffff;

  & > p {
    margin: 0;
    font-weight: 600;
  }
`;
