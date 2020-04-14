import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectParameters from "./Components/SelectParameters/SelectParameters";
import Home from "./Components/Home/Home";
import Historicos from './Components/Historicos/Historicos';
import H_grafica from './Components/Historicos/H_grafica';
import H_parametros from './Components/Historicos/H_parametros';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={ Home } />
      <Route path="/ajustes" component={ SelectParameters } />
      <Route path="/historicos" component={ Historicos } />
      <Route path="/historicos_grafica" component={ H_grafica } />
      <Route path="/historicos_parametros" component={ H_parametros } />
    </Router>
  );
};

export default Routes;
