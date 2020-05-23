import React, { Fragment, useState, useEffect } from 'react';
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "./Notas.css";


const Notas = () => {

  const [notas, guardarNotas] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5005/graphic-data")
      .then(res=> res.json())
      .then(resJSON =>guardarNotas(resJSON))
      
  }, [])


  return (  
    <Fragment> 
      <Cabecera />
      
        <div className="container-primero">
          <input type="text" placeholder="Buscar"/>
          <div className="item-primero">dd-mm-aa</div>
          <div className="item-primero">Nombre</div>
        </div>
        <form>
        <div className="container-segundo">
          <div className="item-segundo">

            {
              notas.length !== 0
              ? notas.map((experimentos)=>{
              return (<div className="nota"><p>{experimentos.experiment}-{experimentos.nombre}</p></div>)
              })

              : null
              
            }
            
          </div>
          
          <textarea placeholder="Escribe tus notas aquí..."rs></textarea>
        </div>
        </form>
        <div className="container-tercero">
          <input type="submit" className="guardar-nota" value="Guardar" onClick={()=> console.log("Nota guardada")}/>
        </div>
      
      
      <Pie />

    </Fragment>
  );
}
 
export default Notas;