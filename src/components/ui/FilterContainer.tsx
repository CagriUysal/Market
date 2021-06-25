import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function FilterContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

export default FilterContainer;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 1rem;

  }
`;
