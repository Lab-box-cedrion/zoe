import React, { Component, Fragment } from 'react';
import LChartLexperiment from './LChartLexperiment';
import Cabecera from '../Cabecera/Cabecera';
import Pie from '../Footer/Pie';
import './HGrafica.scss';

export default class GraficaLExperiment extends Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.location.state.data }
    }
    render() {
        console.log(this.state.data);
        return (
            <Fragment>
                <Cabecera />
                <LChartLexperiment readingData={this.state.data} />
                <Pie />
            </Fragment>

        );
    }
}