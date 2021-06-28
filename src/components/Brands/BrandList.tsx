import { ChangeEvent, useMemo } from "react";
import styled from "styled-components";

import { useAppDispatch } from "../../app/hooks";

import { Brand, Product, useBrands, useProducts } from "../../api";
import { addBrand, removeBrand } from "../../app/reducers/brandsFilter";
import searchFilter from "../../utils/searchFilter";

interface Props {
  searchTerm: string;
}

const getItemCountPerBrand = (brands: Brand[], products: Product[]) => {
  const itemsPerBrand: { [brandSlug: string]: number } = {};
  brands.forEach(({ slug }) => {
    itemsPerBrand[slug] = 0;
  });

  products.forEach(({ manufacturer }) => {
    itemsPerBrand[manufacturer]++;
  });

  return itemsPerBrand;
};

function BrandList({ searchTerm }: Props) {
  const { brands } = useBrands();
  const { products } = useProducts();
  const dispatch = useAppDispatch();

  const itemsPerBrand = useMemo(() => {
    if (products && brands) {
      return getItemCountPerBrand(brands, products);
    }
  }, [brands, products]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, brand: Brand) => {
    if (event.target.checked === true) {
      dispatch(addBrand(brand));
    } else {
      dispatch(removeBrand(brand));
    }
  };

  if (brands && products && itemsPerBrand) {
    // all necessary data is loaded from api, (itemsPerBrands is calculated)
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
              <span>
                {brand.name}{" "}
                <Count>
                  (
                  {brand.slug === "__ALL__"
                    ? products.length
                    : itemsPerBrand[brand.slug]}
                  )
                </Count>
              </span>
            </CheckboxLabel>
          ))}
      </Container>
    );
  } else {
    return <p>...loading</p>; // TODO: better loading animation
  }
}

export default BrandList;

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

const Count = styled.span`
  color: #a8a8a8;
`;
