import styled from "styled-components";

import { useBrands } from "../api/brands";
import searchFilter from "../utils/searchFilter";

interface Props {
  searchTerm: string;
}

function BrandList({ searchTerm }: Props) {
  const brands = useBrands();
  return (
    <Container>
      {brands
        .filter(({ name }) => searchFilter(name, searchTerm))
        .map(({ name }) => (
          <CheckboxLabel>
            <input type="checkbox" />
            <span>{name}</span>
          </CheckboxLabel>
        ))}
    </Container>
  );
}

const Container = styled.div`
  height: 8rem;
  margin-top: 1rem;
  overflow-y: scroll;
`;

const CheckboxLabel = styled.label`
  display: block;
  color: #525252;
  margin-bottom: 1rem;

  & > span {
    margin-left: 1rem;
  }

  & > input {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export default BrandList;
