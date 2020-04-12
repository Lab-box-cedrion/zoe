import React, { Component } from "react";
import "./SelectParameteres.css";
import InputParameter from "./inputParameter";
import { Container, Row, Form } from "react-bootstrap";

class SelectParameters extends Component {
  state = {
    AllParameter: [
      { id: 0, type: "input", name: "Tiempo", value: 0, unity: "s" },
      { id: 1, type: "input", name: "Tensión", value: 0, unity: "Kv" },
      { id: 2, type: "input", name: "Amperaje", value: 0, unity: "mA" },
      { id: 3, type: "input", name: "Temperatura", value: 0, unity: "ºC" },
      { id: 4, type: "input", name: "Humedad", value: 0, unity: "%" },
      { id: 5, type: "check", name: "Luz", value: "false", unity: "%" },
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

  handleAdd = (index) => {
    console.log("Add1", this.state.AllParameter[index]);
  };

  render() {
    console.log("render SP", this.state.AllParameter[0]);
    return (
      <section className="select-parameters">
        <Container>
          <Row className="intro">
            <h1>Campos de selección</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              nihil nesciunt sequi libero accusamus dolore corrupti autem
              maxime, perspiciatis incidunt, et, necessitatibus soluta
              laboriosam dolores sit vitae nobis amet sint?
            </p>
          </Row>
          <Row>
            <Form className="form-parameters">
              {this.state.AllParameter.map((element) => (
                <inputParameter
                  key={element.id}
                  stateParameter={element.name}
                  onAdd={this.handleAdd(element.id)}
                />
              ))}
            </Form>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SelectParameters;
