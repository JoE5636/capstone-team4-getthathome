import React from "react";
import { Global } from "@emotion/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { global, reset } from "./styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </React.StrictMode>
);
