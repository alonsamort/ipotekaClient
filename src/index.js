import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";

export const RootContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext.Provider value={[1]}>
      <App />
    </RootContext.Provider>
  </React.StrictMode>,
);
