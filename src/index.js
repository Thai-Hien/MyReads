import React from "react";
import ReactDOM from "react-dom";
import MyreadApp from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <MyreadApp />
  </BrowserRouter>,
  document.getElementById("root")
);
