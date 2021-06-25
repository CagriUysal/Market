import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import FilterHeader from "../ui/FilterHeader";
import FilterContainer from "../ui/FilterContainer";
import TagList from "./TagList";

function Tags() {
  const [search, setSearch] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  return (
    <div>
      <FilterHeader title="Tags" />
      <FilterContainer>
        <Search
          placeholder="Search tag"
          value={search}
          onChange={handleChange}
        />
        <TagList searchTerm={search} />
      </FilterContainer>
    </div>
  );
}

export default Tags;

const Search = styled.input`
  width: 100%;
  padding: 0.5rem;

  border: 2px solid #e0e0e0;
  border-radius: 2px;

  &::placeholder {
    color: #a8a8a8;
  }
`;
