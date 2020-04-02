import React from "react";
import "./Cabecera.css";
import { Link } from "react-router-dom";
import {Dropdown, DropdownButton} from "react-bootstrap";

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
      <DropdownButton id="dropdown-basic-button" title="Menu">
        <Dropdown.Item href="#/action-1">INFO</Dropdown.Item>
        <Dropdown.Item href="#/action-2">AJUSTES</Dropdown.Item>
        <Dropdown.Item href="#/action-3">HISTÓRICOS</Dropdown.Item>
        <Dropdown.Item href="#/action-4">MAX/MIN</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Cabecera;
