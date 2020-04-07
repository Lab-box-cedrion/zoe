import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SelectParameters from "./Components/SelectParameters/SelectParameters";
import Home from "./Components/Home/Home";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        {/*       <Route path="/info" component={} />
         */}{" "}
        <Route path="/ajustes" component={SelectParameters} />
        {/* <Route path="historicos" component={} />
      <Route path="notas" component={} />
      <Route path="max-min" component={} /> */}
      </div>
    </Router>
  );
};

export default Routes;
