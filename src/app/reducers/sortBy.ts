import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SortOptions {
  sortingField: "price" | "added";
  order: "asc" | "desc";
}

const initialState = { sortingField: "price", order: "asc" } as SortOptions;

export const sortBySlice = createSlice({
  name: "sortBy",
  initialState,
  reducers: {
    changeSortBy: (state, action: PayloadAction<SortOptions>) => action.payload,
  },
});

export const { changeSortBy } = sortBySlice.actions;

export default sortBySlice.reducer;
