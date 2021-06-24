import styled from "styled-components";
import Brands from "./Brands";

import SortOptions from "./SortOptions";

function DisplayOptions() {
  return (
    <DisplayOptionsContainer>
      <SortOptions />
      <Brands />
    </DisplayOptionsContainer>
  );
}

export default DisplayOptions;

const DisplayOptionsContainer = styled.div`
  flex: 1 1 25%;

  & > div {
    margin-bottom: 2rem;
  }
`;
