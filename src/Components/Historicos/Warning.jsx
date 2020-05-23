import React, { Component } from 'react';
import Noty from 'noty';
import './noty.css';
import './bootstrap-v4.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";




class Warning extends Component {
    // render() {
    //     return ( 
    //       <div className="Warning">
    //           <button className="warningButton" onClick={(e)=>this.showWarning(e)}></button>
    //     </div>  
    //     );
    //   }
    render() {
         return ( 
         <div className="Warning">
                 <button className="startButton warningButton" onClick={(e) => this.showWarning(e)} type="submit">
                     
                  <FontAwesomeIcon icon={faPowerOff}/> 
                    </button>
             </div>
               );
              }

      showWarning(){
        new Noty({
          type:"warning",
          theme:"bootstrap-v4",
          layout:"center",
          text:"Ensayo en curso...",
          timeout:"30000"
        }).show()
      }
    }
    
 
export default Warning;