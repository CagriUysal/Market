import styled from "styled-components";

function Footer() {
  return <MarketFooter>©2019 Market • Privacy Policy</MarketFooter>;
}

export default Footer;

const MarketFooter = styled.footer`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 0.85rem;
  margin-top: 10rem;
  margin-bottom: 1rem;
`;
