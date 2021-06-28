import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changePage } from "../app/reducers/page";
import usePagination from "./hooks/usePagination";

function Pagination() {
  const { currentPage, totalPages } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();
  const items = usePagination({
    count: totalPages,
    page: currentPage,
  });

  const handleClick = (value: number) => {
    dispatch(changePage(value));
  };

  return (
    <Container>
      <List>
        {items.map(({ page, type, selected }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <Page onClick={() => handleClick(page)} active={selected}>
                {page}
              </Page>
            );
          } else if (type === "Prev") {
            children = (
              <GhostButton
                onClick={() => handleClick(page)}
                disabled={currentPage <= 1}
              >
                {type}
              </GhostButton>
            );
          } else if (type === "Next") {
            children = (
              <GhostButton
                onClick={() => handleClick(page)}
                disabled={currentPage >= totalPages}
              >
                {type}
              </GhostButton>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;

  & > li {
    margin: 0 0.25rem;
  }
`;

const GhostButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${(props) => props.theme.colors.primary};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 0.5rem;
  border-radius: 2px;
  font-weight: 600;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

const Page = styled(GhostButton)<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : "transparent"};
  color: ${(props) => (props.active ? "#ffffff" : "#697488")};
`;

export default Pagination;
