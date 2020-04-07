import React, { Component } from 'react';
import './Clock.scss';
import Timer from './Timer';



export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date(),
            onChange : true
        }
    }
    
    componentDidMount() {
        this.intervalId = setInterval(
            () => this.tick(),
            1000
        );  
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    async tick(){

        await Timer(this.state.time);

        this.setState({
            time: new Date()
        })
    }

    onChange() {
        
    }


    render () {
        return (
            <div>
                {this.state.time ? 
                        <div className= 'clock-container'>
                            <h1 className='titulo'>LAB - BOX</h1>
                            <canvas id="canvas" width="500" height="500" >cccc</canvas>
                        </div>
                  
                        : <div><div class="lds-ripple"><div></div><div></div></div></div>
                }
            </div>
    
        );
    }
    
}
