import styled from "styled-components";

// TODO: put market image
function Header() {
  return <MarketHeader>Market</MarketHeader>;
}

export default Header;

const MarketHeader = styled.header`
  text-align: center;
  height: 4.75rem;
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 2rem;
`;
