import React, { Component } from 'react';
import './Charts.scss';
import { Chart } from 'primereact/chart';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


class LineChart extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {experimentooo: this.props.location.state.data}
    // }

    render() {


        const { humidity, temperature, experiment } = this.props.readingData;

        const humidityArray = humidity.split(',');
        const humidityNumberArray = humidityArray.map(element => (
            parseFloat(element)
        ));

        const temperatureArray = temperature.split(',');
        const temperatureNumberArray = temperatureArray.map(element => (
            parseFloat(element)
        ));

<<<<<<< HEAD
        const
=======
        //Colocar los segundos en función de la length de la temperatura
        let medirNumeros = temperatureArray.length * 2
        let resultsSeconds = []
        for(var i=0; i < medirNumeros; i = i+2){
            resultsSeconds.push(`${i}s`)    
        }

>>>>>>> 4c6253bcc8c02f97a980deb11b13c5ac2fd4e69b


        const options = {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            fontSize: 500,
            legend: {
                position: 'bottom'
            }

        }

        const lineStylesData = {
            labels: resultsSeconds,
            datasets: [
                {
                    label: 'Temperatura ºC',
                    // bodyFontFamily: 'Nunito, sans-serif',
                    // titleFontFamily: 'Nunito, sans-serif',
                    fontColor: 'rgb(255, 255, 255)',
                    // titleFontSize: 500,
                    data: temperatureNumberArray,
                    fill: false,
                    borderColor: '#7E8CE0',
                    backgroundColor: 'rgb(255, 255, 255)'
                },
                {
                    label: 'Humedad %',
                    fontColor: 'rgb(255, 255, 255)',
                    data: humidityNumberArray,
                    fill: true,
                    borderDash: [5, 5],
                    borderColor: '#84dfc4',
                    backgroundColor: 'rgba(132, 223, 196, 0.7)'
                },
                {
                    label: 'Ozono %',
                    fontColor: 'rgb(255, 255, 255)',
                    data: [],
                    fill: true,
                    borderColor: '#FFA48E',
                    backgroundColor: '#FFA48E'

                }
            ]
        };



        return (
            <div className='outerbox'>
                <div className="content-section-introduction">
                    <div className="feature-intro">
                        <h1 className='title-section'>Diagrama de parámetros</h1>
                        <p className='instructions'>Visualización de los parámetros recogidos.
                        Clica en la leyenda de un parámetro para ocultarlo o mostrarlo.
                            Sitúa el cursor sobre los nodos para ver el dato exacto.</p>
                    </div>
                    <main className='container-charts'>
                        <article className='pair-charts'>
                            <section className='date-time-charts'>
                                {experiment}
<<<<<<< HEAD
                            </section>
=======
                        </section>
>>>>>>> 4c6253bcc8c02f97a980deb11b13c5ac2fd4e69b
                            <section className='name-charts'>
                                Nombre
                        </section>
                        </article>
                    </main>
                </div>

                <div className="content-section-implementation">
                    <Chart type="line" data={lineStylesData} option={options} />

                </div>
            </div>
        )
    }
}

export default LineChart;