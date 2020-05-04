//conexion arduino

const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const parser = new Readline();

const macPort = "/dev/cu.usbserial-14220";
const linuxPort = "/dev/ttyUSB0";
const mySerial = new Serialport(linuxPort, { baudRate: 9600 });

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

  console.log(globalExperiment);
  console.log("que soy");
});

const dataJson = function () {
  mySerial.close();
  console.log("hola", globalExperiment);
  let temperatureString = globalExperiment.temperature.join(",");
  let humidityString = globalExperiment.humidity.join(",");
  globalExperiment.temperature = temperatureString;
  globalExperiment.humidity = humidityString;

  let experimentJson = JSON.stringify(globalExperiment);
  console.log("Soy un superJSON", experimentJson);
  return experimentJson;
};

let time = 10;
let experimentDuration = time * 1000 + 2000;

function closeSerialPort(duration) {
  let intervalo = setTimeout(dataJson, duration);
}
closeSerialPort(experimentDuration);

// recojo errores
mySerial.on("err", function (data) {
  console.log(err.message);
});

server.listen(3000, () => {
  console.log("server on port ", 3000);
});
