import React, { Fragment } from "react";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import "primereact/resources/themes/nova-dark/theme.css";
import "./HParametros.css";

const HParametros = () => {
  return (
    <Fragment>
      <Cabecera />

      <div className="primer-container">
        <div className="primer-item">dd-mm-aa</div>
        <div className="primer-item">Nombre</div>
      </div>

      <div className="segundo-container">
        <div className="segundo-item">
          <div className="paracircle"><p>76,3</p></div>
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
