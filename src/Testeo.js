import React, { Fragment } from 'react';
import Cabecera from './Components/Cabecera/Cabecera';
import Pie from "./Components/Footer/Pie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";


const Testeo = () => {

  let iconoAjustes = <FontAwesomeIcon icon={faCog} />
 

  return (  
    <Fragment>
      <Cabecera />
  <h4>Página de testeo {iconoAjustes}</h4>
      <Pie />
    </Fragment>
  ); 
}
 
export default Testeo;
