import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectParameters from "./Components/SelectParameters/SelectParameters";
import Home from "./Components/Home/Home";
import Historicos from './Components/Historicos/Historicos';
import HGrafica from './Components/Historicos/HGrafica';
import Notas from "./Components/Notas/Notas";
import HParametros from './Components/Historicos/HParametros';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={ Home } />
      <Route path="/ajustes" component={ SelectParameters } />
      <Route path="/historicos" component={ Historicos } />
      <Route path="/historicos_grafica" component={ HGrafica } />
      <Route path="/notas" component={ Notas } />
      <Route path="/historicos_parametros" component={ HParametros } />
    </Router>
  );
};

export default Routes;
