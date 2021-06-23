import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../api";

export interface BasketItem {
  product: Product;
  amount: number;
}

export interface BasketItems {
  [slug: string]: BasketItem;
}

interface Basket {
  items: BasketItems;
  total: number;
}

const initialState = { items: {}, total: 0 } as Basket;

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const { slug, price } = product;

      if (slug in state.items) {
        // product already exist in the list
        // just increase the amount
        state.items[slug].amount++;
      } else {
        // create new product in list
        state.items[slug] = {
          product,
          amount: 1,
        };
      }

      state.total += price;
    },

    removeItem: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const { slug, price } = product;

      if (state.items[slug].amount === 1) {
        // user made amount of product 0, remove the item from list
        delete state.items[slug];
      } else {
        state.items[slug].amount--;
      }

      state.total -= price;
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;

export default basketSlice.reducer;
