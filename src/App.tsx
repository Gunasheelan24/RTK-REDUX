import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/Redux-Hooks";
import { deposit } from "./store/Redux-Toolkit/Bank/AmountSlice";
import { fetchUser } from "./store/Redux-Toolkit/User/UserSlice";

const App: React.FC = () => {
  // Redux
  const state = useAppSelector((state) => state.counter.count);
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // lifecycle Hook
  useEffect(() => {
    // fetch userDetail
    dispatch(fetchUser(2));
  }, [dispatch]);

  return (
    <>
      <p>{state}</p>
      {userState.users.map((user, index) => (
        <main key={index}>
          <p>{user.userName}</p>
        </main>
      ))}
      <button onClick={() => dispatch(deposit({ amount: 100 }))}>
        Increase Amount
      </button>

      {/* <div>
        <button onClick={() => handleUserSubmit()}>Add New User</button>
      </div> */}
    </>
  );
};

export default App;
