import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./Bank/AmountSlice";
import counterReducer from "./Bank/CounterSlice";
import userReducer from "./User/UserSlice";

export const rtkStore = configureStore({
  reducer: {
    bankAmount: amountReducer,
    counter: counterReducer,
    user: userReducer,
  },
});

// Types
export type RootState = ReturnType<typeof rtkStore.getState>;
export type AppDispatch = typeof rtkStore.dispatch;
