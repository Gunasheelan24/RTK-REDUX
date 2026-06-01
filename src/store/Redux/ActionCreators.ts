import { Deposit, Withdraw } from "./ActionType";

export const deposit = () => ({
  type: Deposit,
});

export const withdraw = () => ({
  type: Withdraw,
});
