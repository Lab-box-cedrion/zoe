import React, { Component, Fragment } from 'react';
import LineChartDemo from './Charts';
import Cabecera from '../Cabecera/Cabecera';
import Pie from '../Footer/Pie';

class Historicos_grafica extends Component {
   
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
 
export default Historicos_grafica;