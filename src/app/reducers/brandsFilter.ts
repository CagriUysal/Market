import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Brand } from "../../api";

export interface BrandsFilter {
  [slug: string]: boolean;
}

const initialState = { __ALL__: true } as BrandsFilter;

const brandFilterSlice = createSlice({
  name: "brandFilter",
  initialState,
  reducers: {
    addBrand: (state, action: PayloadAction<Brand>) => {
      const { slug } = action.payload;
      state[slug] = true;
    },
    removeBrand: (state, action: PayloadAction<Brand>) => {
      const { slug } = action.payload;
      delete state[slug];
    },
  },
});

export default brandFilterSlice.reducer;

export const { addBrand, removeBrand } = brandFilterSlice.actions;
