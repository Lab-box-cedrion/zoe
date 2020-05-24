import React, { Fragment, useState, useEffect } from "react";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "primereact/resources/themes/nova-dark/theme.css";
import "./HParametros.css";
import { Link } from "react-router-dom";

const HParametros = () => {
  const [lastExperiment, setLastExperiment] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5005/ultimo-experimento")
      .then((data) => {
        return data.json();
      })
      .then((dataJSON) => {
        setLastExperiment(dataJSON);
        setLoading(true);
      });
  }, []);

  const results = [];

  function lastResults() {
    if (lastExperiment.length > 0) {
      let arrayHumidity = lastExperiment[0].humidity.split(",");
      let arrayTemperature = lastExperiment[0].temperature.split(",");
      let arrayOzone = lastExperiment[0].ozone.split(",");

      let lastResultsHUM = arrayHumidity[arrayHumidity.length - 1];
      let lastResultsTem = arrayTemperature[arrayTemperature.length - 1];
      let lastResultsOzo = arrayOzone[arrayOzone.length - 1];
      results.push(lastResultsHUM, lastResultsTem, lastResultsOzo);
    }
    return results;
  }
  lastResults();

  console.log(lastExperiment);

  return loading ? (
    <Fragment className= 'HParametros'>
      <Cabecera />
      <div className="primer-container">
        <Link to={{
                pathname: `/historicos_grafica/${lastExperiment[0].experiment}`, state: {lastExperiment}}} className='date'>
        <div className="primer-item">{lastExperiment[0].experiment}></div>
         </Link>
        <div className="primer-item">{lastExperiment[0].nombre}</div>
      </div>

      <div className="segundo-container">
        <div className="segundo-item">
          <div className="paracircle">
            <p>{results[0]}</p>
          </div>
          <div className="parameter">
            <p>HR %</p>
          </div>
        </div>
        <div className="segundo-item">
          <div className="paracircle">
            <p>{results[1]}</p>
          </div>
          <div className="parameter">
            <p>T ºC</p>
          </div>
        </div>
        <div className="segundo-item">
          <div className="paracircle desactivado">
            <p>15,9</p>
          </div>
          <div className="parameter disabled">
            <p>NOx %</p>
          </div>
        </div>
      </div>

      <div className="tercer-container">
        <div className="tercer-item">
          <div className="paracircle">
            <p>{results[2]}</p>
          </div>
          <div className="parameter">
            <p>03 %</p>
          </div>
        </div>
        <div className="tercer-item">
          <div className="paracircle desactivado">
            <p>77,8</p>
          </div>
          <div className="parameter disabled">
            <p>H202 %</p>
          </div>
        </div>
        <div className="tercer-item">
          <div className="paracircle desactivado">
            <p>34,6</p>
          </div>
          <div className="parameter disabled">
            <p>X %</p>
          </div>
        </div>
      </div>

      <Pie />
    </Fragment>
  ) : (<div><div className="conecta">Conecta el servidor, por favor</div>
    <div><div className="lds-ripple"><div></div><div></div></div></div> </div>)

  ;
};
export default HParametros;
