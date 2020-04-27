const express = require("express");
const app = express();

const PORT = process.env.PORT || 5005;

require("dotenv").config();
const database = require("./conf");

const bodyParser = require("body-parser");

const http = require("http");

const server = http.createServer(app);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

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

app.listen(PORT, () => {
  console.log(`Conectado al puerto ${PORT}`);
});

//conexion arduino

const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const parser = new Readline();

const mySerial = new Serialport("/dev/ttyUSB0", { baudRate: 9600 });

//abro la conexión puerto serie
mySerial.on("open", function () {
  console.log("Opened Serial Port");
});

const experimentoGeneral = { proyecto: [] };
//recibo datos de Arduino, cuando están los datos los queremos enviar a todos los clientes
mySerial.on("data", function (data) {
  let datos = data.toString().split(",");
  let date = new Date().toLocaleString("es-Es");

  let experiment = { date: date, humedad: "", temperatura: "" };
  experimentoGeneral.proyecto.push(experiment);

  experiment.humedad = datos[0];
  experiment.temperatura = datos[1];
  let experimentJson = JSON.stringify(experiment);

  console.log(experimentoGeneral);
  console.log("que soy");
  /* io.emit("arduino: data", {
    //emite a todos los usuarios
    value: data.toString(), // vamos a mandar el número, par clave valor
  }); */
});

console.log("estoy fuera");

// recojo errores
mySerial.on("err", function (data) {
  console.log(err.message);
});

server.listen(3000, () => {
  console.log("server on port ", 3000);
});
