import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks/Redux-Hooks";
import { deposit } from "./store/Redux-Toolkit/AmountSlice";

const App: React.FC = () => {
  const state = useAppSelector((state) => state.bankAmount.amount);
  const dispatch = useAppDispatch();

  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch(deposit({ amount: 100 }))}>
        Increase Amount
      </button>
    </>
  );
};

export default App;
