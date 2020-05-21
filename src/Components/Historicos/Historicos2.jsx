import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link } from "react-router-dom";
import Cabecera from '../Cabecera/Cabecera';
import Pie from '../Footer/Pie';
import './Historicos.scss';

const Historicos2 = () => {
        // fetch the data from the API, in the end you will have an array of objects (JSON)
        
        
        return ( 
            <Fragment>
                <Cabecera />
                    <article className= 'content'>
                        <h1 className= 'title'>
                        Históricos
                        </h1>
                        <p className= 'about-historicos'>Archivo de  los experimentos. Se puede buscar por día y hora o nombre elegido. Ordenados de más reciente a más antiguo.  Seleccionando uno de  los campos se accederá a  una vista resumen de los resultados y seleccionando cada uno de ellos a  su vez  se  visualiza la gráfica de los resultados.</p>
                    </article>
                    <main className= 'data-container'>
                        {
                        // array.map(data => {
                        // return (
                        // <Link to="/historicos_grafica/{data._id}"><article></article><Link>
                        //)
                        //})
                        }
                    </main>
                <Pie />
            </Fragment>
            
         );
    
}
 
export default Historicos2;