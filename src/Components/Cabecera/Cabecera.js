import React, { useState } from "react";
import "./Cabecera.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faStickyNote} from "@fortawesome/free-solid-svg-icons";
import {Button, Modal} from "react-bootstrap";



const Cabecera = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="cabecera">
      {/* ICONO DE RUEDA DE AJUSTES VISIBLE SOLO EN MÓVILES */}
      <div className="rueda-ajustes">
        <Link to="/ajustes">
          <FontAwesomeIcon icon={faCog} />
        </Link>
      </div>
      {/* ICONO-LOGO DE CEDRIÓN */}
      <Link to="/historicos_parametros">
        <img
          className="brand-icon"
          src="https://s6.gifyu.com/images/cedrion_horizontal_dark_TRANS-01.png"
          alt="main-icono"
        />
      </Link>
      {/* MENU DE NAVEGACIÓN */}
      <Navbar collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* ----INICIO DEL MODAL---- */}
            <Nav.Link>
              <Button
                className="boton-modal"
                variant="primary"
                onClick={handleShow}
              >
                Info
              </Button>
            </Nav.Link>
            {/* ----FIN DEL MODAL---- */}
            <Nav.Link>
              <Link to="/ajustes">Ajustes</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/historicos">Históricos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/notas">Notas</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* ICONO DE NOTAS VISIBLE SOLO EN DISPOSITIVOS MÓVIL */}
      <div className="icono-notas"><Link to="/notas"><FontAwesomeIcon icon={faStickyNote} /></Link></div>
      {/* CONTENIDO DEL MODAL */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h5 className='subtitulo'><strong>FORMAS DE USO DE ESTA APLICACIÓN</strong></h5> 
           1. Desde el navegador superior se puede acceder a <strong>AJUSTES</strong>
            donde se seleccionan los valores con los que se quiere que funcione la placa Arduino.
            <p>
            2. Una vez seleccionados los campos de ajustes, se comienza a realizar el experimento, que se podrá visualizar al pulsar "ver resultados".
            3. Desde el menú de navegación, en "Históricos", también se tiene acceso directo a los resultados. Hay un historial completo de más a menos reciente.
            4. Clicando sobre ellos, se accede a su gráfica correspondiente. Otro modo de acceder a la última gráfica es clicando un parámetro del último experimento, al que se tiene acceso directo desde el logo de Cedrion del navegador */}
          <p>
            <strong>AJUSTES</strong>
            Desde este menú se accede a "Ajustes" desde donde se podrá elegir
            los valores con los que tiene que funcionar la placa Arduino.
            <p>
              <strong>NOTAS</strong>, o si se quiere directamente desde el
              submenú de navegación de Ajustes.
            </p>
          </p>
          <p>
            2. Una vez hechos los campos de selección en el apartado de ajustes,
            se crean los resultados del experimento que se puede ver desde el
            botón de ver <strong>resultado de experimento</strong>. Tiene acceso
            directo desde el menú de navegación, <strong>HISTÓRICOS</strong>,
            donde se muestra el último, o todos los anteriores
          </p>
          <p>
            Clicando sobre un parámetro se accede a la <strong>gráfica</strong>.
          </p>
        </Modal.Body>
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
