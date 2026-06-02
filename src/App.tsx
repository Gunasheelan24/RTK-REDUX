import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks/Redux-Hooks";
import { deposit } from "./store/Redux-Toolkit/Bank/AmountSlice";
import { addUser } from "./store/Redux-Toolkit/User/UserSlice";

const App: React.FC = () => {
  const state = useAppSelector((state) => state.counter.count);
  const userState = useAppSelector((state) => state.user);
  console.log(userState);
  const dispatch = useAppDispatch();

  const handleUserSubmit = () => {
    const getUpdatedState = dispatch(
      addUser({
        id: 1,
        name: "gunasheelan",
        userName: "gunasheelan24",
        email: "gunasheelan16@gmail.com",
      }),
    );

    console.log(getUpdatedState);
  };

  return (
    <>
      <p>{state}</p>
      {userState.map((user, index) => (
        <main key={index}>
          <p>{user.userName}</p>
        </main>
      ))}
      <button onClick={() => dispatch(deposit({ amount: 100 }))}>
        Increase Amount
      </button>

      <div>
        <button onClick={() => handleUserSubmit()}>Add New User</button>
      </div>
    </>
  );
};

export default App;
