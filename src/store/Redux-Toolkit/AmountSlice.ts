import { createSlice } from "@reduxjs/toolkit";

export const bankAmountSlice = createSlice({
  name: "bank",
  initialState: {
    amount: 0,
  },
  reducers: {
    deposit: (state, action) => {
      state.amount += action.payload.amount;
    },

    withdraw: (state, action) => {
      state.amount = state.amount -= action.payload.amount;
    },
  },
});

export const { deposit, withdraw } = bankAmountSlice.actions;
export default bankAmountSlice.reducer;
