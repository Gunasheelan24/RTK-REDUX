import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BankAccountSliceType {
  amount: number;
}

const initialState: BankAccountSliceType = {
  amount: 0,
};

export const bankAmountSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<BankAccountSliceType>) => {
      state.amount += action.payload.amount;
    },

    withdraw: (state, action) => {
      state.amount = state.amount -= action.payload.amount;
    },
  },
});

export const { deposit, withdraw } = bankAmountSlice.actions;
export default bankAmountSlice.reducer;
