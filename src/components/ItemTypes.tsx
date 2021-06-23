import styled from "styled-components";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { changeType } from "../app/reducers/itemType";

function ProductTypeSelection() {
  const itemType = useAppSelector((state) => state.itemType);
  const dispatch = useAppDispatch();

  return (
    <>
      <Chip
        style={{ marginRight: "1rem" }}
        active={itemType === "mug"}
        onClick={() => dispatch(changeType("mug"))}
      >
        mug
      </Chip>
      <Chip
        active={itemType === "shirt"}
        onClick={() => dispatch(changeType("shirt"))}
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
