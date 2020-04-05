import React, { Fragment } from "react";
import Cabecera from "./Components/Cabecera/Cabecera";
import Pie from "./Components/Footer/Pie";
import SelectParameters from "./Components/SelectParameters/SelectParameters";

function App() {
  return (
    <Fragment>
      <Cabecera />
      <SelectParameters />
      <Pie />
    </Fragment>
  );
}

export default App;
