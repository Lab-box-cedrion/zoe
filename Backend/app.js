const express = require("express");
const app = express();

const PORT = process.env.PORT || 5005

require("dotenv").config();
const database = require("./conf");

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

// Middleware para no tener problemas con los CORS cuando hagamos peticiones a nuestra API en Heroku
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.listen(PORT, ()=>{
  console.log(`Conectado al puerto ${PORT}`)
})