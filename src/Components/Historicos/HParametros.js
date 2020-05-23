import React, { Fragment, useState, useEffect } from "react";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "primereact/resources/themes/nova-dark/theme.css";
import "./HParametros.css";
import { faTeeth } from "@fortawesome/free-solid-svg-icons";

const HParametros = () => {


  const [lastExperiment, setLastExperiment] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5005/ultimo-experimento")
      .then((data)=>{
        return data.json()
      })
      .then((dataJSON)=>{
        setLastExperiment(dataJSON[0])
        
      })

  },[])

  // function lastResults() {
  //   let stringHumidity = lastExperiment.humidity
  //   // const arrayHumidity = stringHumidity.length
  //   return console.log(stringHumidity);
  // }

  // lastResults();
  


  return (
    <Fragment>
      <Cabecera />

      <div className="primer-container">
        <div className="primer-item">{lastExperiment.experiment}</div>
  <div className="primer-item">{lastExperiment.nombre}</div>
      </div>

      <div className="segundo-container">
        <div className="segundo-item">
         <div className="paracircle"><p>23</p></div>
          <div className="parameter">
            <p>HR %</p>
          </div>
        </div>
        <div className="segundo-item">
          <div className="paracircle"><p>25,7</p></div>
          <div className="parameter">
            <p>T ºC</p>
          </div>
        </div>
        <div className="segundo-item">
          <div className="paracircle desactivado"><p>15,9</p></div>
          <div className="parameter disabled">
            <p>NOx %</p>
          </div>
        </div>
      </div>

      <div className="tercer-container">
        <div className="tercer-item">
          <div className="paracircle"><p>0,9</p></div>
          <div className="parameter">
            <p>03 %</p>
          </div>
        </div>
        <div className="tercer-item">
          <div className="paracircle desactivado"><p>77,8</p></div>
          <div className="parameter disabled">
            <p>H202 %</p>
          </div>
        </div>
        <div className="tercer-item">
          <div className="paracircle desactivado"><p>34,6</p></div>
          <div className="parameter disabled">
            <p>X %</p>
          </div>
        </div>
      </div>

      <Pie />
    </Fragment>
  );
};
export default HParametros;
