import React from "react";

import "./SelectParametersForm.scss";

function SelectParametersForm() {
  return (
    <React.Fragment>
      <section>
        <h1>Selección de parámetros</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          nihil nesciunt sequi libero accusamus dolore corrupti autem maxime,
          perspiciatis incidunt, et, necessitatibus soluta laboriosam dolores
          sit vitae nobis amet sint?
        </p>
        <form className="containerCSS form-parameters">
          <label className="fecha">
            <input type="date"></input>
          </label>
          <label>
            <input type="text" placeholder="Nombre"></input>
          </label>
          <label className="tiempo">
            <input
              type="number"
              name="tiempo"
              placeholder="Tiempo h:mm:ss"
              value="hola"
            ></input>
            <button className="button plus ">&#9650;</button>
            <button className="button minus">&#9660;</button>
          </label>
          <label className="tension">
            <input
              type="number"
              name="tension"
              placeholder="Tension KV"
              value="hola"
            ></input>
            <button className="button plus ">&#9650;</button>
            <button className="button minus">&#9660;</button>
          </label>
          <label className="amperaje">
            <input
              type="number"
              name="amperaje"
              placeholder="Amperaje mA"
              value="hola"
            ></input>
            <button className="button plus ">&#9650;</button>
            <button className="button minus">&#9660;</button>
          </label>
          <label className="temperatura">
            <input
              type="number"
              name="temperatura"
              placeholder="Temperatura ºC"
              value="hola"
            ></input>
            <button className="button plus ">&#9650;</button>
            <button className="button minus">&#9660;</button>
          </label>
          <label className="humedad">
            <input
              type="number"
              name="humedad"
              placeholder="Humedad %"
              value="hola"
            ></input>
            <button className="button plus ">&#9650;</button>
            <button className="button minus">&#9660;</button>
          </label>
          <label className="luz-pulsada">
            Luz pulsada
            {/* <input
              type="number"
              name="luzPulsada"
              placeholder="luzPulsada"
              value="hola"
            ></input> */}
            <button className="button plus ">Sí</button>
            <button className="button minus">No</button>
          </label>
          <select id="microorganismos" name="microorganismos">
            <option value="Pseudomonas aeruginosa">
              Pseudomonas aeruginosa
            </option>
            <option value="Listeria Monocytogenes">
              Listeria Monocytogenes
            </option>
            <option value="Escherichia Coli">Escherichia Coli</option>
            <option value="Staphylococcus aureus">Staphylococcus aureus</option>
          </select>
        </form>
      </section>
    </React.Fragment>
  );
}

export default SelectParametersForm;
