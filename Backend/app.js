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

app.post("/insertar-data", (req, res) => {
  req.body = datosJson;
  console.log("request", req.body);
  database.query("INSERT INTO prueba SET ?", req.body, (error, results) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      console.log(error);
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

app.listen(PORT, () => {
  console.log(`Conectado al puerto ${PORT}`);
});
