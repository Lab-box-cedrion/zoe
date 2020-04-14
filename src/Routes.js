import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectParameters from "./Components/SelectParameters/SelectParameters";
import Home from "./Components/Home/Home";
import Historicos from './Components/Historicos/Historicos';
import Historicos_grafica from './Components/Historicos/Historicos_grafica';
import Testeo from "./Testeo"

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={ Home } />
      <Route path="/ajustes" component={ SelectParameters } />
      <Route path="/historicos" component={ Historicos } />
      <Route path="/historicos_grafica" component={ Historicos_grafica } />
      <Route path="/test" component={Testeo} />
    </Router>
  );
};

export default Routes;
