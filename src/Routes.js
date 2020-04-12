import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SelectParameters from "./Components/SelectParameters/SelectParameters";
import Home from "./Components/Home/Home";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/ajustes" component={SelectParameters} />
    </Router>
  );
};

export default Routes;
