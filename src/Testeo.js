import React, { Fragment } from 'react';
import Cabecera from './Components/Cabecera/Cabecera';
import Pie from "./Components/Footer/Pie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";


const Testeo = () => {

  return (  
    <Fragment>
      <Cabecera />
        <h5 style={{textAlign: "center"}}>Página de testeo </h5>
      <Pie />
    </Fragment>
  ); 
}
 
export default Testeo;
