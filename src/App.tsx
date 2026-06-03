import React, { useEffect } from "react";
import { useGetUserQuery } from "./store/Redux-Toolkit/api/userApi";
// import { useAppDispatch, useAppSelector } from "./hooks/Redux-Hooks";
// import { deposit } from "./store/Redux-Toolkit/Bank/AmountSlice";
// import { fetchUser } from "./store/Redux-Toolkit/User/userSlice";

const App: React.FC = () => {
  // Redux
  // const state = useAppSelector((state) => state.counter.count);
  // const userState = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();

  // RTK Query
  const { data } = useGetUserQuery(1);

  // functions
  // async function getUserDetails() {
  //   try {
  // const result = await dispatch(fetchUser(2)).unwrap();
  // console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // lifecycle Hook
  useEffect(() => {
    console.log(data);
    // fetch userDetail
    // getUserDetails();
  }, [data]);

  return (
    <>
      {/* <p>{state}</p>
      {userState.users.map((user, index) => (
        <main key={index}>
          <p>{user.userName}</p>
        </main>
      ))}
      <button onClick={() => dispatch(deposit({ amount: 100 }))}>
        Increase Amount
      </button> */}

      {/* <div>
        <button onClick={() => handleUserSubmit()}>Add New User</button>
      </div> */}
    </>
  );
};

export default App;
