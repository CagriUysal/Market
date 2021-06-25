import { ChangeEvent } from "react";
import styled from "styled-components";

import { useAppDispatch } from "../../app/hooks";

import { Brand, useBrands } from "../../api";
import { addBrand, removeBrand } from "../../app/reducers/brandsFilter";
import searchFilter from "../../utils/searchFilter";

interface Props {
  searchTerm: string;
}

function BrandList({ searchTerm }: Props) {
  const brands = useBrands();
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>, brand: Brand) => {
    if (event.target.checked === true) {
      dispatch(addBrand(brand));
    } else {
      dispatch(removeBrand(brand));
    }
  };

  return (
    <Container>
      {brands
        .filter(({ name }) => searchFilter(name, searchTerm))
        .map((brand) => (
          <CheckboxLabel key={brand.slug}>
            <input
              type="checkbox"
              onChange={(e) => handleChange(e, brand)}
              defaultChecked={brand.slug === "__ALL__"}
            />
            <span>{brand.name}</span>
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
