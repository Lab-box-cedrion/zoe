import React from "react";
import "./Cabecera.css";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownButton,
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";

const Cabecera = () => {
  return (
    <div id="cabecera">
      <img
        className="brand-icon"
        src="https://s6.gifyu.com/images/Screenshot-2020-04-06-at-17.21.51.png"
        alt="main-icono"
      />
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>INFO</Nav.Link>
            <Nav.Link>AJUSTES</Nav.Link>
            <Nav.Link>HISTÓRICOS</Nav.Link>
            <Nav.Link>MAX/MIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Cabecera;
