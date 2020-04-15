import React, { Component, Fragment } from 'react';
import {Fieldset} from 'primereact/fieldset';


export default class DateBox extends Component {
    
    render() { 
        return ( 
            <Fragment>
                <Fieldset legend="Date experiment" toggleable={true} >
                <p>dd-mm-aa/hh-mm-ss</p>
                </Fieldset>

            </Fragment>    
         );
    }
}
