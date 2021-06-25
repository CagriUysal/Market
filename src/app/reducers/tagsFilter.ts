import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TagsFilter {
  [slug: string]: boolean;
}

const initialState = { __ALL__: true } as TagsFilter;

const tagsFilterSlicer = createSlice({
  name: "brandFilter",
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload;
      state[tagName] = true;
    },
    removeTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload;
      delete state[tagName];
    },
  },
});

export default tagsFilterSlicer.reducer;

export const { addTag, removeTag } = tagsFilterSlicer.actions;
