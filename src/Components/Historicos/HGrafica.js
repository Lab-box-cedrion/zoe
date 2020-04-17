import React, { Component, Fragment } from 'react';
import LineChartDemo from './Charts';
import Cabecera from '../Cabecera/Cabecera';
import Pie from '../Footer/Pie';

export default class HGrafica extends Component {
   
    render() { 
        return ( 
            <Fragment>
                <Cabecera />
                <LineChartDemo />
                <Pie />
            </Fragment>
            
         );
    }
}
