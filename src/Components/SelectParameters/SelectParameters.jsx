import React, { Component } from "react";
import "./SelectParameteres.css";
import InputParameter from "./inputParameter";
import { Container, Row, Form } from "react-bootstrap";

class SelectParameters extends Component {
  state = {
    inputParameter: [
      { id: 0, name: "Tiempo", value: 0, unity: "s" },
      { id: 1, name: "Tensión", value: 0, unity: "Kv" },
      { id: 2, name: "Amperaje", value: 0, unity: "mA" },
      { id: 3, name: "Temperatura", value: 0, unity: "ºC" },
      { id: 4, name: "Humedad", value: 0, unity: "%" },
    ],
  };

  handleAdd = (index) => {
    console.log("Add1", this.state.inputParameter[index]);
  };

  render() {
    console.log("render SP", this.state.inputParameter[0]);
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
              {this.state.inputParameter.map((element) => (
                <InputParameter
                  key={element.id}
                  name={element.name}
                  unity={element.unity}
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
