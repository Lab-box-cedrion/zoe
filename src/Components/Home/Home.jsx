import React, { Component, Fragment } from 'react';
import Clock from './Clock';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Clock />
            </Fragment>
         );
    }
}
 
export default Home;