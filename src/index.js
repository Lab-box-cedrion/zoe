import React from "react";
import ReactDOM from "react-dom";
/* Stylesheets require for React-Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import SelectParameters from "./Components/SelectParameters/SelectParameters";

ReactDOM.render(
  <React.StrictMode>
    <SelectParameters />
  </React.StrictMode>,
  document.getElementById("root")
);
