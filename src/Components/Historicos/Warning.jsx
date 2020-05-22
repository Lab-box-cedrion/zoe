import React, { Component } from 'react';
import Noty from 'noty';
import './noty.css';
import './bootstrap-v4.css';




class Warning extends Component {
    render() {
        return ( 
          <div className="Warning">
              <button className="warningButton" onClick={(e)=>this.showWarning(e)}><span>Warning!</span></button>
        </div>  
        );
      }
      
      showWarning(){
        new Noty({
          type:"warning",
          theme:"bootstrap-v4",
          layout:"topCenter",
          text:"Ensayo en curso...",
          timeout:"1500"
        }).show()
      }
    }
    
 
export default Warning;