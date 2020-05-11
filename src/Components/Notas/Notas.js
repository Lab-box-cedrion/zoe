import React, { Fragment, useState } from 'react';
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "./Notas.css";


const Notas = () => {

  const [notas, guardarNotas] = useState({
    texto: "",
  });
 
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
            <div className="nota"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor</p></div>
            <div className="nota"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor</p></div>
            <div className="nota"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor</p></div>
            <div className="nota"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor</p></div>
            <div className="nota"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor</p></div>
          </div>
          
          <textarea placeholder="Escribe tus notas aquí..."
           onChange={(event)=>guardarNotas({...notas, texto: event.target.value})}></textarea>
        </div>
        </form>
        <div className="container-tercero">
          <input type="submit" className="guardar-nota" value="Guardar nota" onClick={()=> console.log("Nota guardada")}/>
        </div>
      
      
      <Pie />

    </Fragment>
  );
}
 
export default Notas;