import { configureStore } from "@reduxjs/toolkit";
import dialog from "./dialog";

const store = configureStore({
  reducer: {
    dialog,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
