import { Deposit, Withdraw } from "./ActionType";
import type { AmountType } from "./types";

const initialState: AmountType = {
  amount: 0,
};

export function amountReducer(
  state: AmountType = initialState,
  action: { type: string; value: number },
) {
  switch (action.type) {
    case Deposit:
      return { ...state, amount: (state.amount += action.value) };

    case Withdraw:
      return { ...state, amount: (state.amount -= action.value) };

    default:
      return state;
  }
}
