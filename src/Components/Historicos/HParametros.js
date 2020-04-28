import React, { Component } from 'react';
import Cabecera from '../Cabecera/Cabecera';
import Pie from '../Footer/Pie';
import 'primereact/resources/themes/nova-dark/theme.css';


const HParametros = () =>  {
    
        return (  
            <div>
                <Cabecera />
                <h1> RESUMEN PARAMETROS OBTENIDOS AQUÍ</h1>
                
                
                <Pie />
            </div>
        );
   
}
 export default HParametros;
 