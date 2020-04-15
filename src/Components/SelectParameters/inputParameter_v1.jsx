import React from "react";
import { Form } from "react-bootstrap";

const InputParameters = ({ inputParameter }) => {
  return (
    <React.Fragment>
      <Form.Label>{inputParameter.name}</Form.Label>
      <div className="input-button">
        <Form.Control type="number" placeholder={inputParameter.unity} />
        <button
          onClick={() => inputParameter.onAdd(inputParameter.key)}
          className="button"
        >
          <span>+</span>
        </button>
        <button className="button">-</button>
      </div>

      <Form.Text className="text-muted">
        Este campo es el de <strong>{inputParameter.name}</strong> y la unidad
        de medida usada es
        <strong>{inputParameter.unity}</strong>
      </Form.Text>
    </React.Fragment>
  );
};
export default InputParameters;
