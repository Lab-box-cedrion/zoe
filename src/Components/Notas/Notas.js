import React, { Fragment } from 'react';
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "./Notas.css";


const Notas = () => {

 

  return (  
    <Fragment> 
      <Cabecera />
      
        <div className="container-primero">
          <input type="text" placeholder="Buscar"/>
          <div className="item-primero">dd-mm-aa</div>
          <div className="item-primero">Nombre</div>
        </div>

        <div className="container-segundo">
          <div className="item-segundo"></div>
          <textarea></textarea>
        </div>

        <div className="container-tercero">
          <input type="submit" className="guardar-nota" value="GUARDAR NOTA" />
        </div>
      

      <Pie />

    </Fragment>
  );
}
 
export default Notas;