import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectParameters from "./Components/SelectParameters/SelectParameters";
import Home from "./Components/Home/Home";
import Historicos from './Components/Historicos/Historicos';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/ajustes" component={SelectParameters} />
      <Route path="/historicos" component={Historicos} />
    </Router>
  );
};

export default Routes;
