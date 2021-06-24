import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface sortOptions {
  sortingField: "price" | "added";
  order: "asc" | "desc";
}

const initialState = { sortingField: "price", order: "asc" } as sortOptions;

export const sortBySlice = createSlice({
  name: "sortBy",
  initialState,
  reducers: {
    changeSortBy: (state, action: PayloadAction<sortOptions>) => action.payload,
  },
});

export const { changeSortBy } = sortBySlice.actions;

export default sortBySlice.reducer;
