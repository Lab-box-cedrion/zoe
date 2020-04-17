import React, { Component, Fragment } from 'react';
import {Fieldset} from 'primereact/fieldset';


export default class DateBox extends Component {
    

    let date = new Date();
    
    render() { 
        return ( 
            <Fragment>
                <article>
                    <p>{date}</p>
                </article>
            </Fragment>    
         );
    }
}
