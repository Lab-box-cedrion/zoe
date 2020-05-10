import React, {useState} from "react";
import "./Pie.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle,faHistory,faTasks} from "@fortawesome/free-solid-svg-icons";
import {Nav, Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";

const Pie = () => {

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
        <div className="icono-sub"><Link to="/historicos"><FontAwesomeIcon icon={faHistory} /></Link></div>
        <div className="icono-sub"><Link to="maxmin"><FontAwesomeIcon icon={faTasks} /></Link></div>
      </div>

      {/* Contenido del modal */}
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
      {/* Fin del contenido del modal */}

    </div>

  )
}

export default Pie