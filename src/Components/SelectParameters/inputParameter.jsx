import React, { Component } from "react";
import { Form } from "react-bootstrap";

const InputParameters = (props) => {
  return (
    <React.Fragment>
      <Form.Label>{props.name}</Form.Label>
      <div className="input-button">
        <Form.Control type="number" placeholder={props.unity} />
        <button onClick={() => props.onAdd(props.key)} className="button">
          <span>+</span>
        </button>
        <button className="button">-</button>
      </div>

      <Form.Text className="text-muted">
        Este campo es el de <strong>{props.name}</strong> y la unidad de medida
        usada es
        <strong>{props.unity}</strong>
      </Form.Text>
    </React.Fragment>
  );
};
export default InputParameters;
