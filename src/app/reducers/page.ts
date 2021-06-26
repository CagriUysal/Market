import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../../config";

const initialState = { currentPage: 1, totalPages: 1 };

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    changeTotalPages: (
      state,
      action: PayloadAction<{ productsLength: number }>
    ) => {
      const { productsLength } = action.payload;
      state.totalPages = Math.ceil(productsLength / config.itemsPerPage);

      // Reset the current page to 1 when total page number changes.
      // This means user changed the display options and probably
      // wants to start seeing products from the first page
      state.currentPage = 1;
    },
  },
});

export const { changePage, changeTotalPages } = pageSlice.actions;

export default pageSlice.reducer;
