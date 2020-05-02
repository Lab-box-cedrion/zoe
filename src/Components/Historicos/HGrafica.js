import React, { Component, Fragment } from 'react';
import LineChart from './Charts';
import Cabecera from '../Cabecera/Cabecera';
import Pie from '../Footer/Pie';
import './HGrafica.scss';

export default class HGrafica extends Component {
   
    render() { 
        return ( 
            <Fragment>
                <Cabecera />
                {/* <h1 className= 'title'>Diagrama de humedad y temperatura</h1> */}
               
                <LineChart />
                <Pie />
            </Fragment>
            
         );
    }
}
