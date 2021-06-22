import { useState } from "react";
import styled from "styled-components";

import { ItemType } from "../api";

function ProductTypeSelection() {
  const [activeChip, setActiveChip] = useState<ItemType>("mug");

  return (
    <>
      <Chip
        style={{ marginRight: "1rem" }}
        active={activeChip === "mug"}
        onClick={() => setActiveChip("mug")}
      >
        mug
      </Chip>
      <Chip
        active={activeChip === "shirt"}
        onClick={() => setActiveChip("shirt")}
      >
        shirt
      </Chip>
    </>
  );
}

export default ProductTypeSelection;

interface ChipProps {
  active?: boolean;
}

const Chip = styled.button<ChipProps>`
  border-width: 0;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: ${(props) =>
    props.active
      ? props.theme.colors.primaryInverted
      : props.theme.colors.primary};
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.primary
      : props.theme.colors.primaryInverted};
`;
