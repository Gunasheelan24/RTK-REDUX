import React from "react";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <p>{"welcome"}</p>
    </>
  );
};

export default App;
