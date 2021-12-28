import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./state";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
