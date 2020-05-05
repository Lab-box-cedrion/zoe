import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './Spiral.scss';



class Spiral extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            moveOn: false
        }
    }

    render () {

        if(this.state.moveOn === true) {
            return <Redirect to='/historicos' />
        }

    return (
        <div className="Spiral">
            <div className='brand-text'>
            <img
        	className="brand-icon"
        	src="https://s6.gifyu.com/images/cedrion_horizontal_dark_TRANS-01.png"
        	alt="main-icono"/>
			<img
			className='titulo'
			src="https://s6.gifyu.com/images/LAB-BOX-01.png"
			alt="logo-lab-box"/>
      		{/* <h1 className='titulo'>LAB - BOX</h1> */}
			<h3 className='motto'> We drive the flow </h3>
        	</div>
			
				<div className= 'spiral-container'>
                    {this.state.movingSpiral ? 
                        <div onClick={this.redirectComponent}>
                        </div>
                  
                        : <div><div class="lds-ripple"><div></div><div></div></div></div>
                }
            </div>
           
            <div className= 'wrap'>
            
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
					<div class='c'></div>
				</div>
			</div>
		);
    }
}
export default Spiral;
