import React, { Component, Fragment } from "react";
import LineChart from "./LineChart";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "./HGrafica.scss";

export default class HGrafica extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.location.state.data };
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
