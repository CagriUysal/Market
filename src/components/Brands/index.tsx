import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import FilterHeader from "../ui/FilterHeader";
import FilterContainer from "../ui/FilterContainer";
import BrandList from "./BrandList";

function Brands() {
  const [search, setSearch] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  return (
    <div>
      <FilterHeader title="Brands" />
      <FilterContainer>
        <Search
          placeholder="Search brand"
          value={search}
          onChange={handleChange}
        />
        <BrandList searchTerm={search} />
      </FilterContainer>
    </div>
  );
}

export default Brands;

const Search = styled.input`
  width: 100%;
  padding: 0.5rem;

  border: 2px solid #e0e0e0;
  border-radius: 2px;

  &::placeholder {
    color: #a8a8a8;
  }
`;
