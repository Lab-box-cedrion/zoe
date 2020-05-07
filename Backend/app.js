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

//Ruta get para recuperar los experimentos y sus lecturas
app.get("/graphic-data", (req, res) => {
  database.query("SELECT * FROM readings", (error, results) => {
    if (error) {
      console.log(error);
      res.status.send(error);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

//Ruta get para la gráfica por su id
app.get("/graphic-data/:id", (req, res) => {
  database.query("SELECT * FROM readings WHERE id ?", (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  });
});

app.post("/insertar-data", (req, res) => {
  console.log(req.body);
  database.query("INSERT INTO readings SET ?", req.body, (error, results) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      console.log(error);
      res.status(201).send(results);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Conectado al puerto ${PORT}`);
});
