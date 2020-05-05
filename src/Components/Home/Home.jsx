import React, { Component, Fragment } from 'react';
// import Clock from './Clock';
import Spiral from './Spiral';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                {/* <Clock /> */}
                <Spiral />
            </Fragment>
         );
    }
}
 
export default Home;