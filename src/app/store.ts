import { configureStore } from "@reduxjs/toolkit";

import itemType from "./reducers/itemType";
import basket from "./reducers/basket";

const store = configureStore({
  reducer: {
    itemType,
    basket,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
