import React, { useState } from "react";
import "./Cabecera.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";

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
      <div className="icono-notas">
        <Link to="/notas">
          <FontAwesomeIcon icon={faStickyNote} />
        </Link>
      </div>
      {/* CONTENIDO DEL MODAL */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ÚLTIMO ENSAYO
            <br />
            El logo de Cedrión es un acceso directo a la visualización de los
            datos del último ensayo y su gráfica.
          </p>
          <p>
            <strong>AJUSTES</strong>
            <br />
            Desde este menú se accede a la pantalla desde donde se eligen los
            valores con los que tiene que funcionar la placa Arduino.
          </p>
          <p>
            HISTÓRICOS
            <br />
            En esta pantalla se encuentran los campos a rellenar para realizar
            un experimento.
            <br />
            También es el archivo general de los experimentos realizados. Al
            clicar en cada experimento (nombre o fecha) se muestra su gráfica y
            una botón para descargar un archivo .csv con las lecturas recogidas.
          </p>
          <p>
            NOTAS
            <br />
            En esta pantalla se encuentra una sección en la que se puede guardar
            anotaciones sobre el experimento realizado. Estas notas se guardan
            asociadas a la fecha y nombre del experimento.
            <br />
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
