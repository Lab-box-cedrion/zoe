import React,{useState} from "react";
import "./Cabecera.css";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownButton,
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faClipboard} from "@fortawesome/free-solid-svg-icons";
import {Button, Modal} from "react-bootstrap";



const Cabecera = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div id="cabecera">
      {/* ICONO DE RUEDA DE AJUSTES VISIBLE SOLO EN MÓVILES */}
      <div className="rueda-ajustes"><FontAwesomeIcon icon={faCog} /></div>
      {/* ICONO-LOGO DE CEDRIÓN */}
      <img
        className="brand-icon"
        src="https://s6.gifyu.com/images/cedrion_horizontal_dark_TRANS-01.png"
        alt="main-icono"
      />
      {/* MENU DE NAVEGACIÓN */}
      <Navbar collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* ----INICIO DEL MODAL---- */}
            <Nav.Link><Button variant="primary" onClick={handleShow}>
            INFO
            </Button></Nav.Link>
            {/* ----FIN DEL MODAL---- */}
            <NavDropdown title="AJUSTES" id="collasible-nav-dropdown">
              <NavDropdown.Item>NOTAS</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>HISTÓRICOS</Nav.Link>
            <Nav.Link>MAX/MIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* ICONO DE NOTAS VISIBLE SOLO EN DISPOSITIVOS MÓVIL */}
      <div className="icono-notas"><FontAwesomeIcon icon={faClipboard} /></div>
      {/* CONTENIDO DEL MODAL */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>INFORMACIÓN</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Salir
          </Button>
          
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Cabecera;
