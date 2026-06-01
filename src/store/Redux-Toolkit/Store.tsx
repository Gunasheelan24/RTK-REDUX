import { configureStore } from "@reduxjs/toolkit";
import reducer from "./AmountSlice";

export const rtkStore = configureStore({
  reducer: {
    bankAmount: reducer,
  },
});

// Types
export type RootState = ReturnType<typeof rtkStore.getState>;
export type AppDispatch = typeof rtkStore.dispatch;
