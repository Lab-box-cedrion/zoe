import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container-image">
        <img
          src="https://s5.gifyu.com/images/icono-cedrion.png"
          alt="main-icono"
        />
      </div>

      <ul className="container-menu">
        <li className="menu">INFO</li>
        <li className="menu">AJUSTES</li>
        <li className="menu">HISTÓRICOS</li>
        <li className="menu">MAX/MIN</li>
      </ul>
    </header>
  );
};

export default Navbar;
