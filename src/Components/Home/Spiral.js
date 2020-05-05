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
			<div>
				<div className= 'spiral-container'>
                    {this.state.movingSpiral ? 
                        <div onClick={this.redirectComponent}>
                            <h1 className='titulo'>LAB - BOX</h1>
                            
                        </div>
                  
                        : <div><div class="lds-ripple"><div></div><div></div></div></div>
                }
            </div>
            <div className='brand'>
            <img
        className="brand-icon"
        src="https://s6.gifyu.com/images/cedrion_horizontal_dark_TRANS-01.png"
        alt="main-icono"
      />
      <h1 className='titulo'>LAB - BOX</h1>

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
