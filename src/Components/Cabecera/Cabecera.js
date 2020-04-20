import React,{useState} from "react";
import "./Cabecera.css";
import { Link } from "react-router-dom";
import {
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
        <Modal.Body><h5><em>FORMAS DE USO DE ESTA APLICACIÓN</em></h5>
        <p>1. Acceso a los ajustes de campos de selección desde <strong>AJUSTES</strong>. Desde aquí se pueden acceder a las <strong>NOTAS</strong>, o si se quiere directamente desde el submenú de navegación de Ajustes.</p><p>2. Una vez hechos los campos de selección en el apartado de ajustes, se crean los resultados del experimento que se puede ver desde el botón de ver <strong>resultado de experimento</strong>. Tiene acceso directo desde el menú de navegación, <strong>HISTÓRICOS</strong>, donde se muestra el último, o todos los anteriores</p><p>Clicando sobre un parámetro se accede a la <strong>gráfica</strong>.</p></Modal.Body>
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
