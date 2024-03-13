import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this file exists or remove this line if not using
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
