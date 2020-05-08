const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const fetch = require("node-fetch");

const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const parser = new Readline();

const path = require('path');

app.use(express.urlencoded({ extended: false }));


// Middleware para no tener problemas con los CORS cuando hagamos peticiones a nuestra API en Heroku
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


app.post("/crear-experimento", (req, res) => {
  const mySerial = new Serialport(req.body.puerto, { baudRate: 9600 });
  //abrir la conexión puerto serie
  mySerial.on("open", function () {
    console.log("Opened Serial Port");
  });
  const date = new Date().toLocaleString("es-Es");
  const globalExperiment = {
    experiment: date,
    temperature: [],
    humidity: [],
    ozone: [],
  };

  let start = false;

  //recibit datos de Arduino a través del puerto de serie
  mySerial.on("data", function (data) {
    let dataOne = data.toString().split(",");

    //let experimentJson = JSON.stringify(globalExperiment);
    globalExperiment.humidity.push(parseFloat(dataOne[0]));
    globalExperiment.temperature.push(parseFloat(dataOne[1]));
    globalExperiment.ozone.push(parseFloat(data[2]));
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
    let ozoString = globalExperiment.ozone.join(",");

    globalExperiment.temperature = temString;
    globalExperiment.humidity = humString;
    globalExperiment.ozone = ozoString;

    fetch("http://localhost:5005/insertar-data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(globalExperiment),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        res.status(201).send("Los datos han sido creados con éxito");
      });
  };

  //Tiempo en segundos que durará el experimento
  let tiempo = req.body.segundos;
  let duration = tiempo * 1000 + 2000;

  function closeSerialPort() {
    let intervalo = setTimeout(datosJson, duration);
  }
  closeSerialPort();

  // recojo errores
  mySerial.on("err", function (data) {
    console.log(err.message);
  });


});

server.listen(3001, () => {
  console.log("server on port ", 3001);
});
