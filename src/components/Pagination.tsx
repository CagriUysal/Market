import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changePage } from "../app/reducers/page";

function Pagination() {
  const { currentPage, totalPages } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();

  const handlePrevClick = () => {
    // prevent going lower than 1
    if (currentPage !== 1) {
      dispatch(changePage(currentPage - 1));
    }
  };

  const handleNextClick = () => {
    // prevent from going higher than total number of pages
    if (currentPage !== totalPages) {
      dispatch(changePage(currentPage + 1));
    }
  };

  return (
    <Container>
      <GhostButton onClick={handlePrevClick}>Prev</GhostButton>
      <ActivePage>{currentPage}</ActivePage>
      <ActivePage>{totalPages}</ActivePage>
      <GhostButton onClick={handleNextClick}>Next</GhostButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
  text-align: center;
`;

const GhostButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

const ActivePage = styled.span`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 2px;
  padding: 0.5rem;
  color: #ffffff;
  font-weight: 600;
`;

export default Pagination;
