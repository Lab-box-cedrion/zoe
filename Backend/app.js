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

const date = new Date().toLocaleString("es-Es");
const globalExperiment = { experiment: date, temperature: [], humidity: [] };

let start = false;
//recibo datos de Arduino, cuando están los datos los queremos enviar a todos los clientes
mySerial.on("data", function (data) {
  let dataOne = data.toString().split(",");

  globalExperiment.humidity.push(parseFloat(dataOne[0]));
  globalExperiment.temperature.push(parseFloat(dataOne[1]));

  let experimentJson = JSON.stringify(globalExperiment);
  console.log(experimentJson);
  console.log("que soy");
});

function a() {
  mySerial.close();
}
let tiempo = 10;
let duration = tiempo * 1000 + 2000;
function closeSerialPort() {
  let intervalo = setTimeout(a, duration);
  console.log("hola", globalExperiment);
}
closeSerialPort();

app.post("/insertar-data", (req, res) => {
  database.query("INSERT INTO prueba SET ?", req.body, (error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send(results);
    }
  });
});
// recojo errores
mySerial.on("err", function (data) {
  console.log(err.message);
});

server.listen(3000, () => {
  console.log("server on port ", 3000);
});
