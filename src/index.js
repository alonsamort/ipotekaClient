import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Family from "./family";
import Home from "./home";
import Secondary from "./secondary";

export const RootContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext.Provider value={[1]}>
      <Secondary />
    </RootContext.Provider>
  </React.StrictMode>,
);
