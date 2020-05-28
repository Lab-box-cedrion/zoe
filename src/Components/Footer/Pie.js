import React, { useState } from "react";
import "./Pie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faHistory,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pie">
      {/* Menu solo visible en dispositivos móviles */}
      <div className="menu-inferior">
        <div className="icono-sub">
          {/* Modal empieza aquí */}
          <Nav.Link>
            <Button variant="primary" onClick={handleShow}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </Button>
          </Nav.Link>
        </div>
        {/* Modal termina aquí  */}
        <div className="icono-sub">
          <Link to="/historicos">
            <FontAwesomeIcon icon={faHistory} />
          </Link>
        </div>
        <div className="icono-sub">
          <Link to="maxmin">
            <FontAwesomeIcon icon={faTasks} />
          </Link>
        </div>
      </div>

      {/* Contenido del modal */}
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
      {/* Fin del contenido del modal */}
    </div>
  );
};

export default Pie;
