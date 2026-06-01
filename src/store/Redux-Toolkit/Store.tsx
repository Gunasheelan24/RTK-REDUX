import { configureStore } from "@reduxjs/toolkit";
import reducer from "./AmountSlice";

export const store = configureStore({
  reducer: {
    bankAmount: reducer,
  },
});
