import styled from "styled-components";

import SortOptions from "./SortOptions";

function DisplayOptions() {
  return (
    <DisplayOptionsContainer>
      <SortOptions />
    </DisplayOptionsContainer>
  );
}

export default DisplayOptions;

const DisplayOptionsContainer = styled.div`
  flex: 1 1 25%;
`;
