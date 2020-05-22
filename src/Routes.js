import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectParametersForm from "./Components/SelectParameters/SelectParametersForm";
import Home from "./Components/Home/Home";
// import Historicos from "./Components/Historicos/Historicos";
import Historicos2 from "./Components/Historicos/Historicos2";
import HGrafica from "./Components/Historicos/HGrafica";
import Notas from "./Components/Notas/Notas";
import HParametros from "./Components/Historicos/HParametros";
import Warning from "./Components/Historicos/Warning";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/ajustes" component={SelectParametersForm} />
      <Route path="/historicos" component={Historicos2} />
      <Route path="/historicos_grafica/:id" component={HGrafica} />
      <Route path="/notas" component={Notas} />
      <Route path="/historicos_parametros" component={HParametros} />
      <Route path="/warning" component={Warning} />
    </Router>
  );
};

export default Routes;