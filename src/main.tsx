import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import store from "./store/Redux/Store.ts";
import { rtkStore } from "./store/Redux-Toolkit/Store.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={rtkStore}>
      <App />
    </Provider>
  </StrictMode>,
);
