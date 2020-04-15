import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SelectParameters from "./Components/SelectParameters/SelectParameters";
import Home from "./Components/Home/Home";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {/*       <Route path="/info" component={} />
       */}{" "}
      <Route path="/ajustes" component={SelectParametersForm} />
      {/* <Route path="historicos" component={} />
      <Route path="notas" component={} />
      <Route path="max-min" component={} /> */}
    </Router>
  );
};

export default Routes;
