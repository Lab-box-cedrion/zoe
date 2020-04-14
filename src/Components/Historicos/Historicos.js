import React, { Component, Fragment } from 'react';
import Cabecera from '../Cabecera/Cabecera';
import Pie from '../Footer/Pie';

class Historicos extends Component {
   
    render() { 
        return ( 
            <Fragment>
                <Cabecera />
                
                <Pie />
            </Fragment>
            
         );
    }
}
 
export default Historicos;