import React, { useState } from "react";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";

import Intro from "./Intro";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from "primereact/multiselect";

import "./SelectParametersForm.scss";

function SelectParametersForm() {
  // contiene los nombres de los campos de los input
  const date = new Date().toLocaleString("es-Es");
  const [name, setName] = useState("");
  const [time, setTime] = useState(null);
  const [tension, setTension] = useState(null);
  const [amperage, setAmperage] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [pulsedLight, setpulsedLight] = useState("true");
  const [microorganisms, selectMicroorganisms] = useState("value");

  /* 
    Pseudomonas aeruginosa, Listeria Monocytogenes, Escherichia Coli, Staphylococcus aureus, Salmonella typhimurium: "", */

  const submitInfo = (event) => {
    event.preventDefault();
    console.log({ name }, { time }, { tension });
  };

  const microorganismsSelectItems = [
    { label: "Pseudomonas aeruginosa", value: "Pseudomonas aerugniosa" },
    { label: "Listeria Monocytogenes", value: "Listeria Monocytogenes" },
    { label: "Escherichia Coli", value: "Escherichia Coli" },
    { label: "Staphylococcus aureus", value: "Staphylococcus aureus" },
    { label: "Salmonella typhimurium", value: "Salmonella typhimurium" },
  ];

  return (
    <React.Fragment>
      <Cabecera />

      <section>
        <Intro />
        <form
          onSubmit={(event) => submitInfo(event)}
          className="containerCss form-parameters"
        >
          <div className="date">
            <label htmlFor="fecha">
              <span>{date}</span>
            </label>
          </div>
          <div className="name">
            <span className="p-float-label name">
              <InputText
                id="float-input name"
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
                onChange={(e) => setTime(Number(e.target.value))}
              />
              <label htmlFor="float-input">Tiempo h:m:s</label>
            </span>
            <Button
              className="btn plus"
              icon="pi pi-caret-up"
              onClick={() => setTime(time + 10)}
            />
            <Button
              className="btn minus"
              icon="pi pi-caret-down"
              onClick={() => setTime(time - 10)}
            />
          </div>
          <div className="tension">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={tension}
                onChange={(e) => setTension(Number(e.target.value))}
              />
              <label htmlFor="float-input">Tensión Kv</label>
            </span>
            <Button
              className="btn plus"
              icon="pi pi-caret-up"
              onClick={() => setTension(tension + 10)}
            />
            <Button
              className="btn minus"
              icon="pi pi-caret-down"
              onClick={() => setTension(tension - 10)}
            />
          </div>
          <div className="amperage">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={amperage}
                onChange={(e) => setAmperage(Number(e.target.value))}
              />
              <label htmlFor="float-input">Amperaje mA</label>
            </span>
            <Button
              className="btn plus"
              icon="pi pi-caret-up"
              onClick={() => setAmperage(amperage + 10)}
            />
            <Button
              className="btn minus"
              icon="pi pi-caret-down"
              onClick={() => setAmperage(amperage + 10)}
            />
          </div>
          <div className="temperature">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
              />
              <label htmlFor="float-input">Temperatura ºC</label>
            </span>
            <Button
              className="btn plus"
              icon="pi pi-caret-up"
              onClick={() => setTemperature(temperature + 10)}
            />
            <Button
              className="btn minus"
              icon="pi pi-caret-down"
              onClick={() => setTemperature(temperature - 10)}
            />
          </div>
          <div className="humidity">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="30"
                value={humidity}
                onChange={(e) => setHumidity(Number(e.target.value))}
              />
              <label htmlFor="float-input">Humedad %</label>
            </span>
            <Button
              className="btn plus"
              icon="pi pi-caret-up"
              onClick={() => setHumidity(humidity + 10)}
            />
            <Button
              className="btn minus"
              icon="pi pi-caret-down"
              onClick={() => setHumidity(humidity - 10)}
            />
          </div>
          <div className="pulsedLight">
            <h3 className="first">Luz pulsada</h3>
            <Checkbox
              checked={pulsedLight}
              onChange={(e) => setpulsedLight(e.checked)}
            />
            <p>
              Checked:{" "}
              <span style={{ fontWeight: "bold" }}>
                {pulsedLight ? "true" : "false"}
              </span>
            </p>
          </div>
          <div className="microorganisms">
            <MultiSelect
              value={microorganisms}
              options={microorganismsSelectItems}
              onChange={(e) => selectMicroorganisms((microorganisms: e.value))}
              style={{ minWidth: "12em" }}
              filter={true}
              filterPlaceholder="Búsqueda"
              placeholder="Elige microorganismo"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <Pie />
    </React.Fragment>
  );
}

export default SelectParametersForm;
