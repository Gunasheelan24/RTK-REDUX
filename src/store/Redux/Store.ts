import { createStore, combineReducers as reduxCombineReducer } from "redux";
import { amountReducer } from "./AmountReducer";

export const combineReducers = reduxCombineReducer({
  bank: amountReducer,
});

const store = createStore(combineReducers);

export default store;
