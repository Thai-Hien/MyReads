import React from "react";
import ReactDOM from "react-dom/client";
import MyreadApp from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyreadApp />
    </BrowserRouter>
  </React.StrictMode>
);
