import React from "react";
import styled from "styled-components";

import { useAppDispatch } from "../app/hooks";
import { changeSortBy } from "../app/reducers/sortBy";
import FilterHeader from "./FilterHeader";
import FilterContainer from "./FilterContainer";

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
    <div>
      <FilterHeader title="Sorting" />
      <FilterContainer>
        <RadioLabel>
          <input
            type="radio"
            name="sortingOption"
            value="priceAsc"
            defaultChecked
            onChange={handleOptionChange}
          />
          <span>Price low to high</span>
        </RadioLabel>

        <RadioLabel>
          <input
            type="radio"
            name="sortingOption"
            value="priceDesc"
            onChange={handleOptionChange}
          />
          <span>Price high to low</span>
        </RadioLabel>

        <RadioLabel>
          <input
            type="radio"
            name="sortingOption"
            value="addedAsc"
            onChange={handleOptionChange}
          />
          <span>New to old</span>
        </RadioLabel>

        <RadioLabel>
          <input
            type="radio"
            name="sortingOption"
            value="addedDesc"
            onChange={handleOptionChange}
          />
          <span>Old to new</span>
        </RadioLabel>
      </FilterContainer>
    </div>
  );
}

const RadioLabel = styled.label`
  display: block;
  color: #525252;
  margin-bottom: 1rem;

  & > span {
    margin-left: 1rem;
  }
`;

export default SortOptions;
