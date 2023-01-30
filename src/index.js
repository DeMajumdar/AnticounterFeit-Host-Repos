import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { AuthContextProvider } from "./contexts/auth-context";

ReactDOM.render(
  <ContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ContextProvider>,
  document.getElementById("root")
);
