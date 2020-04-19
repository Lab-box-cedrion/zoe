import React, {useState} from "react";
import "./Pie.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle,faHistory,faTasks} from "@fortawesome/free-solid-svg-icons";
import {Nav, Button, Modal} from "react-bootstrap";

const Pie = () => {

  const fecha = new Date().getFullYear();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    
    <div className="pie">
      {/* Menu solo visible en dispositivos móviles */}
      <div className="menu-inferior">
        <div className="icono-sub">
          {/* Modal empieza aquí */}
        <Nav.Link>
        <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faInfoCircle} />
        </Button>
      </Nav.Link></div>
          {/* Modal termina aquí  */}
        <div className="icono-sub"><FontAwesomeIcon icon={faHistory} /></div>
        <div className="icono-sub"><FontAwesomeIcon icon={faTasks} /></div>
      </div>

      {/* Icono de copyright */}
      <p>{fecha} | Cedrion &copy;</p>
      {/* Contenido del modal */}
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
      {/* Fin del contenido del modal */}

    </div>

  )
}

export default Pie