import styled from "styled-components";

interface Props {
  title: string;
}

function FilterHeader({ title }: Props) {
  return <Header>{title}</Header>;
}

export default FilterHeader;

const Header = styled.h3`
  color: #697488;
  font-weight: 600;
  font-size: 0.85rem;
`;
