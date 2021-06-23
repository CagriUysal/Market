import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ItemType } from "../../api";

const initialState = "mug" as ItemType;

export const itemTypeSlice = createSlice({
  name: "itemType",
  initialState,
  reducers: {
    changeType: (state, action: PayloadAction<ItemType>) =>
      (state = action.payload),
  },
});

export const { changeType } = itemTypeSlice.actions;

export default itemTypeSlice.reducer;
