import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./Bank/AmountSlice";
import counterReducer from "./Bank/counterSlice";
import userReducer from "./User/UserSlice";
import userApi from "./api/userApi";

export const rtkStore = configureStore({
  reducer: {
    bankAmount: amountReducer,
    counter: counterReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});

// Types
export type RootState = ReturnType<typeof rtkStore.getState>;
export type AppDispatch = typeof rtkStore.dispatch;
