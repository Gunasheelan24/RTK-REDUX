import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterType {
  count: number;
}

const initialState: CounterType = {
  count: 0,
};

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    IncreaseCount: (state, action: PayloadAction<{ value: number }>) => {
      state.count = state.count + action.payload.value;
      return state;
    },
    DecreaseCount: (state) => {
      state.count = state.count--;
      return state;
    },
  },
});

export const { IncreaseCount, DecreaseCount } = counterSlice.actions;
export default counterSlice.reducer;
