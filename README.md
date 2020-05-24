#Proyecto 'Zoe' para Cedrion.

Presentación
Instalación
Configuarción y uso

Este repositorio contiene el código de un proyecto que hemos desarrollado para la empresa Cedrión:

**Aplicación web** para mostrar en su interfaz la recogida de datos desde un sensor DHT22 (temperatura y humedad) de una placa **Arduino One**.
Los datos se guardan en una base de datos, se muestran gráficamente con Chart.js en la app y se pueden descargar un archivo tipo CSV.

###Instalación y configuración Arduino

Hay que tener instalado:

IDE Arduino:
https://www.arduino.cc/en/Guide/HomePage

Montaje del sensor en la placa Arduino según el plano que comparte Luis Llamas en su web:
https://www.luisllamas.es/arduino-dht11-dht22/

###Instalación y configuración en el PC

Node.js: https://nodejs.org/es/

Hay que descargarse este repositorio. :D

##Puesta en marcha del proyecto

Requisitos:

    Instalar el programa de este repositorio de la carpeta SENSOR_TEMP_HUM en la placa arduino.

Poner en marcha el servidor en el PC:

    Abrir la consola del ordenador.

    Abrir carpeta ardu-app e instalar las dependencias necesarias escribiendo en consola:

    ```npm install```

Ejecutar: node ardu-app.js
Esperar a mensaje de: `Conectado al puerto 5005 app`

    Abrir Zoe-cedrion.netlify.app
    Introducir datos en Históricos y darle al botón de power para comenzar experimento.
    ￼

                Añadir contraseña y correo de la base de datos
