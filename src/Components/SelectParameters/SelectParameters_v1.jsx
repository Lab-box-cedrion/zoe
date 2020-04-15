import React, { Component } from "react";
import "./SelectParameteres.css";
import InputParameter from "./inputParameter";
import { Container, Row, Col, Form } from "react-bootstrap";

class SelectParameters extends Component {
  state = {
    inputParameter: [
      { id: 0, type: "input", name: "Tiempo", value: 0, unity: "s" },
      { id: 1, type: "input", name: "Tensión", value: 0, unity: "Kv" },
      { id: 2, type: "input", name: "Amperaje", value: 0, unity: "mA" },
      { id: 3, type: "input", name: "Temperatura", value: 0, unity: "ºC" },
      { id: 4, type: "input", name: "Humedad", value: 0, unity: "%" },
    ],
    checkParameter: [
      { id: 5, type: "check", name: "Luz", value: "false", unity: "%" },
    ],
    selectParameter: [
      {
        id: 6,
        type: "selector",
        name: "Microorganismo",
        value: 0,
        unity: "ºC",
      },
      { id: 7, type: "selector", name: "Sustrato", value: 0, unity: "%" },
    ],
  };

  handleAdd = () => {
    console.log("Add");
  };

  render() {
    console.log("render SP", this.state.inputParameter[0]);
    return (
      <section className="select-parameters">
        <Container fluid>
          <Row className="intro">
            <Col>
              <h1>Campos de selección</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam nihil nesciunt sequi libero accusamus dolore corrupti
                autem maxime, perspiciatis incidunt, et, necessitatibus soluta
                laboriosam dolores sit vitae nobis amet sint?
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="form-parameters">
                {this.state.inputParameter.map((element) => (
                  <InputParameter
                    key={element.id}
                    inputParameter={element}
                    onAdd={() => this.handleAdd()}
                  />
                ))}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SelectParameters;
