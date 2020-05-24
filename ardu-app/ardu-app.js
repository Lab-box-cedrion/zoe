const express = require("express");
const app = express();
const PORT = process.env.PORT || 5005;
require("dotenv").config();
const database = require("./conf");

app.use(express.json());
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
//Ruta get para recuperar los experimentos y sus lecturas
app.get("/graphic-data", (req, res) => {
  database.query(
    "SELECT * FROM readings ORDER BY id DESC",
    (error, results) => {
      if (error) {
        console.log(error);
        res.status.send(error);
      } else {
        //console.log(results);
        res.send(results);
      }
    }
  );
});

app.get("/ultimo-experimento", (req, res) => {
  database.query(
    "SELECT * FROM readings ORDER BY id DESC LIMIT 1",
    (error, results) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        res.send(results);
      }
    }
  );
});

app.post("/insertar-data", (req, res) => {
  console.log(req.body);
  database.query("INSERT INTO readings SET ?", req.body, (error, results) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      console.log(results);
      res.status(201).send(results);
    }
  });
});

//Inicio de la lectura por puerto-serie de los datos del sensor DHT22

const fetch = require("node-fetch");

const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;

app.post("/crear-experimento", (req, res) => {
  const mySerial = new Serialport(req.body.puerto, { baudRate: 9600 });
  const parser = mySerial.pipe(new Readline({ delimiter: "\n" }));
  //abrir la conexión puerto serie
  mySerial.on("open", function () {
    console.log("Opened Serial Port");
  });

  const nombre = req.body.nombre;
  const date = new Date().toLocaleString("es-Es");
  const globalExperiment = {
    experiment: date,
    nombre: nombre,
    temperature: [],
    humidity: [],
    ozone: [],
  };

  //recibir datos de Arduino a través del puerto de serie

  parser.on("data", function (data) {
    let dataOne = data.toString().split(",");

    globalExperiment.humidity.push(parseFloat(dataOne[0]));
    globalExperiment.temperature.push(parseFloat(dataOne[1]));
    globalExperiment.ozone.push(parseFloat(dataOne[2]));
    console.log("Se están recibiendo datos de la placa", globalExperiment);
  });

  const datosJson = function () {
    mySerial.close();

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
    console.log(data.message);
  });
});

//fin de ardu-server.js
app.listen(PORT, () => {
  console.log(`Conectado al puerto ${PORT} app`);
});
