import React, { Fragment } from 'react';
import Cabecera from './Components/Cabecera/Cabecera';
import Pie from "./Components/Footer/Pie";


const Testeo = () => {
  return (  
    <Fragment>
      <Cabecera />
      <h4>Página de testeo</h4>
      <Pie />
    </Fragment>
  ); 
}
 
export default Testeo;
