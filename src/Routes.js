import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectParametersForm from "./Components/SelectParameters/SelectParametersForm";
import Home from "./Components/Home/Home";
import Historicos from "./Components/Historicos/Historicos";
import HGrafica from "./Components/Historicos/HGrafica";
import Testeo from "./Testeo";
import HParametros from "./Components/Historicos/HParametros";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/ajustes" component={SelectParameters} />
      <Route path="/historicos" component={Historicos} />
      <Route path="/historicos_grafica" component={HGrafica} />
      <Route path="/test" component={Testeo} />
      <Route path="/historicos_parametros" component={HParametros} />
    </Router>
  );
};

export default Routes;
