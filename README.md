# Proyecto 'Zoe' para Cedrion.

Presentación
Instalación
Configuración y uso

Este repositorio contiene el código de un proyecto que hemos desarrollado para la empresa Cedrión:

** Aplicación web** para mostrar en su interfaz la recogida de datos desde un sensor DHT22 (temperatura y humedad) de una placa **Arduino One**.
Los datos se guardan en una base de datos, se muestran gráficamente con Chart.js en la app y se pueden descargar un archivo tipo CSV.

### Instalación y configuración Arduino

Hay que tener instalado:

IDE Arduino:
https://www.arduino.cc/en/Guide/HomePage

Montaje del sensor en la placa Arduino según el plano que comparte Luis Llamas en su web:
https://www.luisllamas.es/arduino-dht11-dht22/

### Instalación y configuración en el PC

Node.js: https://nodejs.org/es/

Para usuarios de Windows es necesario descargar git desde: https://git-scm.com/downloads:
1. Iremos a la carpeta donde se nos ha instalado git.
2. Ejecutaremos "git-bash"
3. También podemos hacer click con el botón derecho y seleccionar "git bash here" en el directorio que queramos abrir en la terminal.

Para usuarios de Mac y Linux no hace falta instalar git. Ya viene integrado.


Hay que descargarse este repositorio. :D

## Puesta en marcha del proyecto

Requisitos:

    Instalar el programa de la carpeta SENSOR_TEMP_HUM, de este repositorio, en la placa arduino.

    Conectar la placa Arduino a un puerto.

Para poner en marcha el servidor en el PC:

    Abrir carpeta ardu-app e instalar las dependencias necesarias escribiendo en consola:

    ```npm install```

Ejecutar: node ardu-app.js

Esperar a mensaje de: `Conectado al puerto 5005 app`

    Abrir cedrion-zoe.netlify.app
    
    Introducir datos en Históricos y darle al botón de power para comenzar experimento.
