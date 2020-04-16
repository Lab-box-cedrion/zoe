import React, { useState } from "react";

import "./SelectParametersForm.scss";

function SelectParametersForm() {
  // contiene los nombres de los campos de los input
  const [newExperiment, updateParameters] = useState({
    fecha: new Date().toLocaleString(),
    nombre: "",

    /* tension: "",
    amperaje: "",
    temperatura: "",
    humedad: "",
    luzpulsada: false,
    microorganismos: "", */
  });
  const [tiempo, setTiempo] = useState(0);

  const submitInfo = (event) => {
    event.preventDefault();
    console.log("submit info");
  };

  return (
    <React.Fragment>
      <section className="containerCSS">
        <h1>Selección de parámetros</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          nihil nesciunt sequi libero accusamus dolore corrupti autem maxime,
          perspiciatis incidunt, et, necessitatibus soluta laboriosam dolores
          sit vitae nobis amet sint?
        </p>
        <form
          onSubmit={(event) => submitInfo(event)}
          className=" form-parameters"
        >
          <label htmlFor="fecha" className="fecha">
            Fecha
            <input
              type="input"
              name="fecha"
              value={newExperiment.fecha}
              placeholder={newExperiment.fecha}
            ></input>
          </label>
          <label>
            <input
              type="text"
              placeholder="Nombre (opcional)"
              name="nombre"
              value={newExperiment.nombre}
              onChange={(event) =>
                updateParameters({
                  ...newExperiment,
                  nombre: event.target.value,
                })
              }
            ></input>
          </label>
          <label
            htmlFor="tiempo"
            className="tiempo"
            value={newExperiment.tiempo}
          >
            <input
              type="number"
              name="tiempo"
              placeholder="Tiempo h:mm:ss"
              value={newExperiment.tiempo}
              onChange={(event) => setTiempo(event.target.value)}
            ></input>
            <button
              className="button plus "
              onClick={() => setTiempo(tiempo + 10)}
            >
              &#9650;
            </button>
            <button
              className="button minus"
              onClick={() => setTiempo(tiempo - 10)}
            >
              &#9660;
            </button>
          </label>
          {/* <label htmlFor="tensión" className="tension" value={newExperiment.tension}>
            <input
              type="number"
              name="tension"
              placeholder="Tension KV"
              value="hola"
            ></input>
            <button className="button plus ">&#9650;</button>
            <button className="button minus">&#9660;</button>
          </label>
          <label htmlFor="amperaje" className="amperaje">
            <input
              type="number"
              name="amperaje"
              placeholder="Amperaje mA"
              value="hola"
            ></input>
            <button className="button plus ">&#9650;</button>
            <button className="button minus">&#9660;</button>
          </label>
          <label htmlFor="temperatura" className="temperatura">
            <input
              type="number"
              name="temperatura"
              placeholder="Temperatura ºC"
              value="hola"
            ></input>
            <button className="button plus ">&#9650;</button>
            <button className="button minus">&#9660;</button>
          </label>
          <label htmlFor="humedad" className="humedad">
            <input
              type="number"
              name="humedad"
              placeholder="Humedad %"
              value="hola"
            ></input>
            <button className="button plus ">&#9650;</button>
            <button className="button minus">&#9660;</button>
          </label>
          <label htmlFor="luzpulsada" className="luz-pulsada">
            Luz pulsada
            {/* <input
              type="number"
              name="luzPulsada"
              placeholder="luzPulsada"
              value="hola"
            ></input> 
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
          </select> */}
          <button type="submit">Aplicar parámetros</button>
        </form>
      </section>
    </React.Fragment>
  );
}

export default SelectParametersForm;
