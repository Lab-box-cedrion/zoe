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
      <div className="rueda-ajustes"><Link to="/ajustes"><FontAwesomeIcon icon={faCog} /></Link></div>
      {/* ICONO-LOGO DE CEDRIÓN */}
      <Link to="/historicos_parametros"><img
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
            <Nav.Link><Button className='boton-modal' variant="primary" onClick={handleShow}>
            Info
            </Button></Nav.Link>
            {/* ----FIN DEL MODAL---- */}
            <NavDropdown title="Ajustes" id="collasible-nav-dropdown">
            <NavDropdown.Item><Link to="/ajustes">Ajustes</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/notas">Notas</Link></NavDropdown.Item>
            </NavDropdown>

            <Nav.Link><Link to="/historicos">Históricos</Link></Nav.Link>
            <Nav.Link><Link to="/maxmin">Max/Min</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* ICONO DE NOTAS VISIBLE SOLO EN DISPOSITIVOS MÓVIL */}
      <div className="icono-notas"><Link to="/notas"><FontAwesomeIcon icon={faClipboard} /></Link></div>
      {/* CONTENIDO DEL MODAL */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Información</Modal.Title>
        </Modal.Header>
        <Modal.Body><h5 className='subtitulo'><strong>FORMAS DE USO DE ESTA APLICACIÓN</strong></h5>
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
