import React, { useState } from "react";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";

import Intro from "./Intro";

import { InputText } from "primereact/inputtext";
import "./SelectParametersForm.scss";

function SelectParametersForm() {
  // contiene los nombres de los campos de los input
  const date = new Date();
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  date.toLocaleString("es-Es", options);
  const [name, setName] = useState("");
  const [time, setTime] = useState(null);
  const [tension, setTension] = useState(null);
  const [amperage, setAmperage] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [pulsedLight, setpulsedLight] = useState("true");

  /* 
    microorganismos: "", */

  const submitInfo = (event) => {
    event.preventDefault();
    console.log("submit info");
  };

  return (
    <React.Fragment>
      <Cabecera />

      <section>
        <Intro />
        <form
          onSubmit={(event) => submitInfo(event)}
          className=" containerCss form-parameters"
        >
          <div className="date">
            <label htmlFor="fecha">Fecha</label>
            <input
              type="input"
              className="input"
              name="fecha"
              value={date}
              placeholder={date}
            ></input>
          </div>
          <div className="name">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="float-input">Nombre (opcional)</label>
            </span>
          </div>
          <div className="time">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <label htmlFor="float-input">Tiempo h:m:s</label>
            </span>
          </div>
          <div className="tension">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={tension}
                onChange={(e) => setTension(e.target.value)}
              />
              <label htmlFor="float-input">Tensión Kv</label>
            </span>
          </div>
          <div className="amperage">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={amperage}
                onChange={(e) => setAmperage(e.target.value)}
              />
              <label htmlFor="float-input">Amperaje mA</label>
            </span>
          </div>
          <div className="temperature">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
              <label htmlFor="float-input">Temperatura ºC</label>
            </span>
          </div>
          <div className="humidity">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
              />
              <label htmlFor="float-input">Humedad %</label>
            </span>
          </div>
        </form>
      </section>
      <Pie />
    </React.Fragment>
  );
}

export default SelectParametersForm;
