import { configureStore } from "@reduxjs/toolkit";

import itemType from "./reducers/itemType";
import basket from "./reducers/basket";
import sortBy from "./reducers/sortBy";
import brandsFilter from "./reducers/brandsFilter";

const store = configureStore({
  reducer: {
    itemType,
    basket,
    sortBy,
    brandsFilter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
