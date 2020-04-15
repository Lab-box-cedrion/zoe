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
        src="https://s6.gifyu.com/images/cedrion_horizontal_dark_TRANS-01.png"
        alt="main-icono"
      />
      <Navbar collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>INFO</Nav.Link>
            <NavDropdown title="AJUSTES" id="collasible-nav-dropdown">
              <NavDropdown.Item>NOTAS</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>HISTÓRICOS</Nav.Link>
            <Nav.Link>MAX/MIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Cabecera;
