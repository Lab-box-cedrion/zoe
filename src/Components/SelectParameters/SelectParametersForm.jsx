import React, { useState } from "react";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";

import Intro from "./Intro";

import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { InputSwitch } from "primereact/inputswitch";

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
            {" "}
            <label htmlFor="float-input"></label>
            <input
              className="i_name"
              type="text"
              placeholder="Nombre (opcional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="time">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="25"
                value={time}
                onChange={(e) => setTime(e.target.value.replace(/[^0-9]/g, ""))}
              />
              <label htmlFor="float-input">Tiempo h:m:s</label>
            </span>
            <button
              className="button"
              type="submit"
              onClick={() => setTime(time + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button"
              type="submit"
              onClick={() => setTime(time - 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="tension">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="25"
                value={tension}
                onChange={(e) =>
                  setTension(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
              <label htmlFor="float-input">Tensión Kv</label>
            </span>
            <button
              className="button"
              type="submit"
              onClick={() => setTension(tension + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button"
              type="submit"
              onClick={() => setTension(tension - 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="amperage">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="25"
                value={amperage}
                onChange={(e) =>
                  setAmperage(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
              <label htmlFor="float-input">Amperaje mA</label>
            </span>
            <button
              className="button"
              type="submit"
              onClick={() => setAmperage(amperage + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button"
              type="submit"
              onClick={() => setAmperage(amperage + 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="temperature">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="25"
                value={temperature}
                onChange={(e) =>
                  setTemperature(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
              <label htmlFor="float-input">Temperatura ºC</label>
            </span>
            <button
              className="button"
              type="submit"
              onClick={() => setTemperature(temperature + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button"
              type="submit"
              onClick={() => setTemperature(temperature - 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="humidity">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="25"
                value={humidity}
                onChange={(e) =>
                  setHumidity(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
              <label htmlFor="float-input">Humedad %</label>
            </span>
            <button
              className="button"
              type="submit"
              onClick={() => setHumidity(humidity + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button"
              type="submit"
              onClick={() => setHumidity(humidity - 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="pulsedLight">
            <h3 className="first">Luz pulsada</h3>
            <InputSwitch
              checked={pulsedLight}
              onChange={(e) => setpulsedLight(e.target.value)}
            />
            {/*               Encendida:{" "}
             */}{" "}
            <span className="pulsedLight-label" style={{ fontWeight: "bold" }}>
              {pulsedLight ? "Encendida" : "Apagada"}
            </span>
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
          <button className="aply-parameters" type="submit">
            <span>APLICAR PARÁMETROS</span>{" "}
          </button>
          <button className="see-results" type="submit">
            <span>VER RESULTADOS</span>{" "}
          </button>
          <button className="go-notes" type="submit">
            <span>IR A NOTAS</span>{" "}
          </button>
        </form>
      </section>
      <Pie />
    </React.Fragment>
  );
}

export default SelectParametersForm;
