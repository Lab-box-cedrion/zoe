import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import Cabecera from '../Cabecera/Cabecera';
import Pie from '../Footer/Pie';
import './Historicos.scss';
import axios from 'axios';



const Historicos = () => {
    // set up the hook. "data" is a variable used to store data, setData the function we call to insert stuff into "data"
    const [data, setData] = useState([]);
    // fetch the data from the API, using axios, and call the function setData to store the JSON inside "data" variable
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                'http://localhost:5005/graphic-data',
              );
      
              setData(result.data);
              console.log("Connected to the database", result.data);
        }
        fetchData();
      }, []);
      
      
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
                        {!data ? 
                            <div>Loading...</div>
                            :
                            data.map(el => {
                                return(
                                     <Link to={{pathname: `/historicos_grafica/${el.id}`,state: {
                                         data: data[el.id]
                                     }}}>
                                        <article className='pair'>
                                            <section className= 'date-time'>{el.experiment}
                                            </section>
                                            <section className='name'>Nombre
                                            </section>
                                        </article>
                                    </Link>
                                )
                            })
                        }
                    </main>
                <Pie />
            </Fragment>
            
         );
    
}
 
export default Historicos;