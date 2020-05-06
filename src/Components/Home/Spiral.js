import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './Spiral.scss';



class Spiral extends Component {
    constructor(props){
        super(props);
        this.state = {
            movingSpiral: true,
            moveOn: false
        }
    }

    onClickSpiral (){
        this.setState({moveOn: true})
    }

    render () {
        if(this.state.moveOn === true) {
            return <Redirect to='/historicos' />
        }

    return (
        <div className="Spiral" onClick={() => this.onClickSpiral()}>
            
            <div className='brand-text'>
            <img
            className="brand-icon"
            src="https://s6.gifyu.com/images/cedrion_horizontal_dark_TRANS-01.png"
            alt="main-icono"/>
            <img
            className='zoe'
            src="https://s6.gifyu.com/images/ZOE-01.png"
            alt="logo-ZOE"/>
            <h3 className='motto'> We drive the flow </h3>
            </div>
            
                <div className= 'spiral-container'>
                  
            </div>
           
            <div className= 'wrap'>
            
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                    <div className='c'></div>
                </div>
            </div>
        );
    }
}
export default Spiral;



