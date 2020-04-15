import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectParametersForm from "./Components/SelectParameters/SelectParametersForm";
import Home from "./Components/Home/Home";
import Historicos from "./Components/Historicos/Historicos";
import H_grafica from "./Components/Historicos/H_grafica";
import Testeo from "./Testeo";

import H_parametros from "./Components/Historicos/H_parametros";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/ajustes" component={SelectParametersForm} />
      <Route path="/historicos" component={Historicos} />
      <Route path="/historicos_grafica" component={H_grafica} />
      <Route path="/test" component={Testeo} />
      <Route path="/historicos_parametros" component={H_parametros} />
    </Router>
  );
};

export default Routes;
