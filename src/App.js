import React, { Fragment } from "react";
import Cabecera from "./Components/Cabecera/Cabecera";
import Pie from "./Components/Footer/Pie";
import "./App.css";
import Home from "./Components/Home/Home";
import Routes from "./Routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
