import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SelectParameters from "./SelectParameters/SelectParameters";

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/info" component={} />
      <Route path="/ajustes" component={SelectParameters} />
      <Route path="historicos" component={} />
      <Route path="notas" component={} />
      <Route path="max-min" component={} />
    </div>
  );
};

export default Routes;
