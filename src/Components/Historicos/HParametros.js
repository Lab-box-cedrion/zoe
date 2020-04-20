import React, { Component } from 'react';
import Cabecera from '../Cabecera/Cabecera';
import Pie from '../Footer/Pie';
import DateBox from './DateBox';
import 'primereact/resources/themes/nova-dark/theme.css';


export default class HParametros extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Cabecera />
                <h1> RESUMEN PARAMETROS OBTENIDOS AQUÍ</h1>
                < DateBox />
                {/* <NameBox /> */}
                <Pie />
            </div>
        );
    }
}
 