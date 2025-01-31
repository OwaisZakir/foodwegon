import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const container = document.getElementById("root");
// console.log(container);
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
