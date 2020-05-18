import React, { useState } from "react";
import Cabecera from "../Cabecera/Cabecera";
import Pie from "../Footer/Pie";
import { Link } from "react-router-dom";
import Intro from "./Intro";

import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";

import "./prueba.scss";

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

  const submitInfo = (event) => {
    event.preventDefault();
    console.log({ name }, { time }, { tension });
  };

  return (
    <React.Fragment>
      <Cabecera />
      <section className="grid">
        <Intro />
        <form
          onSubmit={(event) => submitInfo(event)}
          className="grid-form form-parameters"
        >
          <div>
            <p className="date item">
              <label htmlFor="fecha">
                <span>{date}</span>
              </label>
            </p>
          </div>

          <div className="name item">
            <label htmlFor="name-input"></label>
            <input
              className="input_name"
              type="text"
              placeholder="Nombre (opcional)"
              value={name}
              autoComplete="off"
              onChange={(e) => setName(e.target.value.replace(/[<>]/g, ""))}
            />
          </div>
          <div className="time item">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="20"
                value={time}
                autoComplete="off"
                onChange={(e) =>
                  setTime(Number(e.target.value.replace(/[^0-9]/g, "")))
                }
              />
              <label htmlFor="float-input">Tiempo h:m:s</label>
            </span>
            <button
              className="button plus"
              type="submit"
              onClick={() => setTime(time + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button minus"
              type="submit"
              onClick={() => setTime(time - 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="tension item">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="20"
                value={tension}
                autoComplete="off"
                onChange={(e) =>
                  setTension(Number(e.target.value.replace(/[^0-9]/g, "")))
                }
              />
              <label htmlFor="float-input">Tensión Kv</label>
            </span>
            <button
              className="button plus"
              type="submit"
              onClick={() => setTension(tension + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button minus"
              type="submit"
              onClick={() => setTension(tension - 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="amperage item">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="20"
                value={amperage}
                autoComplete="off"
                onChange={(e) =>
                  setAmperage(Number(e.target.value.replace(/[^0-9]/g, "")))
                }
              />
              <label htmlFor="float-input">Amperaje mA</label>
            </span>
            <button
              className="button plus"
              type="submit"
              onClick={() => setAmperage(amperage + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button minus"
              type="submit"
              onClick={() => setAmperage(amperage - 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="temperature item">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="20"
                autoComplete="off"
                value={temperature}
                onChange={(e) =>
                  setTemperature(Number(e.target.value.replace(/[^0-9]/g, "")))
                }
              />
              <label htmlFor="float-input">Temperatura ºC</label>
            </span>
            <button
              className="button plus"
              type="submit"
              onClick={() => setTemperature(temperature + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button minus"
              type="submit"
              onClick={() => setTemperature(temperature - 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="humidity item">
            <span className="p-float-label">
              <InputText
                id="float-input"
                className="input"
                type="text"
                size="20"
                autoComplete="off"
                value={humidity}
                onChange={(e) =>
                  setHumidity(Number(e.target.value.replace(/[^0-9]/g, "")))
                }
              />
              <label htmlFor="float-input">Humedad %</label>
            </span>
            <button
              className="button plus"
              type="submit"
              onClick={() => setHumidity(humidity + 10)}
            >
              <i className="pi pi-caret-up" style={{ fontSize: "1em" }}></i>
            </button>
            <button
              className="button minus"
              type="submit"
              onClick={() => setHumidity(humidity - 10)}
            >
              <i className="pi pi-caret-down" style={{ fontSize: "1em" }}></i>
            </button>
          </div>
          <div className="pulsedLight ">
            <h3 className="title-light">Luz pulsada</h3>
            <InputSwitch
              checked={pulsedLight}
              onChange={(e) => setpulsedLight(e.target.value)}
            />
            <span className="pulsedLight-label">
              {pulsedLight ? "Encendida" : "Apagada"}
            </span>
          </div>
          <div className="select-div">
            <label htmlFor="microorganism">Elige microorganismo:</label>
            <select className="selected-items">
              <option value="Pseudomonas aeruginosa">
                Pseudomonas aeruginosa
              </option>
              <option value="Listeria Monocytogenes">
                Listeria Monocytogenes
              </option>
              <option value="Escherichia Coli">Escherichia Coli</option>
              <option value="Staphylococcus aureus">
                Staphylococcus aureus
              </option>
              <option value=" Salmonella typhimurium">
                Salmonella typhimurium
              </option>
            </select>
          </div>
          <div className="select-div">
            <label htmlFor="sustratos">Elige sustrato:</label>
            <select className="selected-items">
              <option value="Tierra">Tierra</option>
              <option value="Carbonados">Carbonados</option>
            </select>
          </div>
          <div className="item">
            <button
              className="aply-parameters parameters buttons"
              type="submit"
            >
              <span>Aplicar parámetros</span>{" "}
            </button>
          </div>
          <div className="item ">
            <button className="see-results forms buttons" type="submit">
              <span>Ver resultados</span>{" "}
            </button>
          </div>
          <div className="item ">
            <button className="go-notes notes buttons" type="submit">
              <Link to="/notas" >
                <span>Ir a notas</span>{" "}
              </Link>
            </button>
          </div>
        </form>
      </section>
      <Pie />
    </React.Fragment>
  );
}

export default SelectParametersForm;
