import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container-header">
        <img
          src="https://s5.gifyu.com/images/icono-cedrion.png"
          alt="main-icono"
        />
        </div>
        <div className="container-menu">
          <div className="menu">INFO</div>
          <div className="menu">AJUSTES</div>
          <div className="menu">HISTÓRICOS</div>
          <div className="menu">MAX/MIN</div>
        </div>
      
    </header>
  );
};

export default Navbar;
