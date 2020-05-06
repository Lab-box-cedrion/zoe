const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const fetch = require("node-fetch");

const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const parser = new Readline();



const mySerial = new Serialport("/dev/ttyUSB0", { baudRate: 9600 });
//abrir la conexión puerto serie
mySerial.on("open", function () {
  console.log("Opened Serial Port");
});
const date = new Date().toLocaleString("es-Es");
const globalExperiment = { experiment: date, temperature: [], humidity: [] };

let start = false;

//recibit datos de Arduino a través del puerto de serie
mySerial.on("data", function (data) {
  let dataOne = data.toString().split(",");

  //let experimentJson = JSON.stringify(globalExperiment);
  globalExperiment.humidity.push(parseFloat(dataOne[0]));
  globalExperiment.temperature.push(parseFloat(dataOne[1]));
  console.log(globalExperiment);
  console.log("que soy");

  /*   mySerial.close();
   */
});

console.log("estoy fuera");
const datosJson = function () {
  mySerial.close();
  console.log("objeto literal", globalExperiment);
  let temString = globalExperiment.temperature.join(",");
  let humString = globalExperiment.humidity.join(",");
  globalExperiment.temperature = temString;
  globalExperiment.humidity = humString;

  fetch("http://localhost:5005/insertar-data", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(globalExperiment),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
};

let tiempo = 1800;
let duration = tiempo * 1000 + 2000;

function closeSerialPort() {
  let intervalo = setTimeout(datosJson, duration);
}
closeSerialPort();

// recojo errores
mySerial.on("err", function (data) {
  console.log(err.message);
});
server.listen(3001, () => {
  console.log("server on port ", 3001);
});
