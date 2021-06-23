import { configureStore } from "@reduxjs/toolkit";

import itemType from "./reducers/itemType";

const store = configureStore({
  reducer: {
    itemType,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
