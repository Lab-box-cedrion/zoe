import React from "react";
import Cabecera from "./Components/Cabecera/Cabecera";
import Pie from "./Components/Footer/Pie";
import "./App.css";
import Home from "./Components/Home/Home";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes />
      </Router>
    </React.Fragment>
  );
}

export default App;
