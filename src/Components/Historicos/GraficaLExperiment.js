import React, { Component, Fragment } from "react";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "./HGrafica.scss";
import LineChart from "./LineChart";

export default class GraficaLExperiment extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.location.state.lastGrafica };
  }
  render() {
    return (
      <Fragment>
        <Cabecera />
        <LineChart readingData={this.state.data} />
        <Pie />
      </Fragment>
    );
  }
}
