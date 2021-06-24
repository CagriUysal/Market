import React from "react";
import styled from "styled-components";

import { useAppDispatch } from "../app/hooks";
import { changeSortBy } from "../app/reducers/sortBy";

function SortOptions() {
  const dispath = useAppDispatch();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value === "priceAsc") {
      dispath(changeSortBy({ sortingField: "price", order: "asc" }));
    } else if (value === "priceDesc") {
      dispath(changeSortBy({ sortingField: "price", order: "desc" }));
    } else if (value === "addedAsc") {
      dispath(changeSortBy({ sortingField: "added", order: "asc" }));
    } else if (value === "addedDesc") {
      dispath(changeSortBy({ sortingField: "added", order: "desc" }));
    }
  };

  return (
    <>
      <Header>Sorting</Header>
      <Container onChange={handleOptionChange}>
        <label>
          <input
            type="radio"
            name="sortingOption"
            value="priceAsc"
            defaultChecked
          />
          <span>Price low to high</span>
        </label>

        <label>
          <input type="radio" name="sortingOption" value="priceDesc" />
          <span>Price high to low</span>
        </label>

        <label>
          <input type="radio" name="sortingOption" value="addedAsc" />
          <span>New to old</span>
        </label>

        <label>
          <input type="radio" name="sortingOption" value="addedDesc" />
          <span>Old to new</span>
        </label>
      </Container>
    </>
  );
}

const Header = styled.h3`
  color: #697488;
  font-weight: 600;
  font-size: 0.85rem;
`;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 1rem;

  & > label {
    display: block;
    color: #525252;
    margin-bottom: 1rem;

    & > span {
      margin-left: 1rem;
    }
  }
`;

export default SortOptions;
