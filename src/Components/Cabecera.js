import React from "react";
import "./Cabecera.css";
import { Link } from "react-router-dom";

const Cabecera = () => {
  return (
    <div id="cabecera">
      <div className="contenedor-image">
        <img
          src="https://s5.gifyu.com/images/icono-cedrion.png"
          alt="main-icono"
        />
      </div>

      <ul className="contenedor-menu">
        <li className="menu">INFO</li>
        <li className="menu">AJUSTES</li>
        <li className="menu">HISTÓRICOS</li>
        <li className="menu">MAX/MIN</li>
      </ul>
    </div>
  );
};

export default Cabecera;
