import React, { Fragment } from 'react';
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "./Notas.css";


const Notas = () => {

 

  return (  
    <Fragment> 
      <Cabecera />
        <div className="container-notas">
          <input type="text" id="buscar" name="buscar" placeholder="Buscar" />
          <div className="fecha-proyecto">dd-mm-aa</div>
          <div className="nombre-notas">Proyecto 1</div>
        </div>

      <Pie />

    </Fragment>
  );
}
 
export default Notas;