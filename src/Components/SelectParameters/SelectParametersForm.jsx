import React from "react";

import "./SelectParametersForm.scss";

import { Container, Row, Col } from "react-bootstrap";

function SelectParametersForm() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="intro">
            <h1>Selección de parámetros</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              nihil nesciunt sequi libero accusamus dolore corrupti autem
              maxime, perspiciatis incidunt, et, necessitatibus soluta
              laboriosam dolores sit vitae nobis amet sint?
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <form className="form-parameters">
              <label className="fecha">
                <input type="date"></input>
                <input type="text" placeholder="Nombre"></input>
              </label>
              <label className="tiempo">
                <input
                  type="number"
                  name="tiempo"
                  placeholder="Tiempo h:mm:ss"
                  value="hola"
                ></input>
                <button className="btn plus ">&#9650;</button>
                <button className="btn minus">&#9660;</button>
              </label>
              <label className="tension">
                <input
                  type="number"
                  name="tension"
                  placeholder="Tension KV"
                  value="hola"
                ></input>
                <button className="btn plus ">&#9650;</button>
                <button className="btn minus">&#9660;</button>
              </label>
              <label className="amperaje">
                <input
                  type="number"
                  name="amperaje"
                  placeholder="Amperaje mA"
                  value="hola"
                ></input>
                <button className="btn plus ">&#9650;</button>
                <button className="btn minus">&#9660;</button>
              </label>
              <label className="temperatura">
                <input
                  type="number"
                  name="temperatura"
                  placeholder="Temperatura ºC"
                  value="hola"
                ></input>
                <button className="btn plus ">&#9650;</button>
                <button className="btn minus">&#9660;</button>
              </label>
              <label className="humedad">
                <input
                  type="number"
                  name="humedad"
                  placeholder="Humedad %"
                  value="hola"
                ></input>
                <button className="btn plus ">&#9650;</button>
                <button className="btn minus">&#9660;</button>
              </label>
              <label className="luz-pulsada">
                <input
                  type="number"
                  name="luzPulsada"
                  placeholder="Temperatura ºC"
                  value="hola"
                ></input>
                <button className="btn plus ">&#9650;</button>
                <button className="btn minus">&#9660;</button>
              </label>
            </form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default SelectParametersForm;
