import React, { Component } from 'react';
import './Charts.scss';
import { Chart } from 'primereact/chart';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { getJSDocReadonlyTag, isWhiteSpaceLike } from 'typescript';


class LineChart extends Component {

    render() {


        const { humidity, temperature, ozone, experiment } = this.props.readingData;

        const humidityArray = humidity.split(',');
        const humidityNumberArray = humidityArray.map(element => (
            parseFloat(element)
        ));

        const temperatureArray = temperature.split(',');
        const temperatureNumberArray = temperatureArray.map(element => (
            parseFloat(element)
        ));

        const ozoneArray = ozone.split(',');
        const ozoneNumberArray = ozoneArray.map(element => (
            parseFloat(element)
        ));
        //Colocar los segundos en función de la length de la temperatura
        let medirNumeros = temperatureArray.length * 2
        let resultsSeconds = []
        for (var i = 0; i < medirNumeros; i = i + 2) {
            resultsSeconds.push(`${i}s`)
        }

    
        // Datos ejes 'x' e 'y'
        const data = {
            labels: resultsSeconds,
            datasets: [
                {
                    label: 'Temperatura ºC',
                    data: temperatureNumberArray,
                    fill: false,
                    yAxisID: 'y-axis-1',
                    borderColor: '#7E8CE0',
                    borderWidth: 2,
                    hoverBorderWidth: 4,
                    hoverBorderColor:'rgb(255, 255, 255)',
                    backgroundColor: 'rgb(255, 255, 255)'
                },
                {
                    label: 'Humedad %',
                    fontColor: 'rgb(255, 255, 255)',
                    data: humidityNumberArray,
                    yAxisID: 'y-axis-1',
                    fill: true,
                    borderDash: [5, 5],
                    borderColor: '#84dfc4',
                    backgroundColor: 'rgba(132, 223, 196, 0.7)',
                    hoverBorderWidth: 4,
                    hoverBorderColor:'rgb(255, 255, 255)',
                    
                },
                {
                    label: 'Ozono %',
                    fontColor: 'rgb(255, 255, 255)',
                    data: ozoneNumberArray,
                    fill: true,
                    yAxisID: 'y-axis-1',
                    borderColor: '#FFA48E',
                    backgroundColor: '#FFA48E',
                    hoverBorderWidth: 4,
                    hoverBorderColor:'rgb(255, 255, 255)',

                }
            ]
        };
        
        // Estilos- opciones de la gráfica
        const options = {
            title: {
                display: true,
                text: 'Temperatura (ºC) - Humedad (%) - Ozono (%)',
                fontFamily: "Nunito",
                fontSize: 15,
                fontColor: '#DEDEDE',
                position: 'left'

            },
            layout: {
                padding: {
                        top: 30,
                        bottom: 2,
                        right: 4,
                        left:0
                }
            },
            tooltips: {
                enabled: true
            },
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    ticks: {
                        fontFamily: "Nunito",
                        fontSize: 10,
                        fontColor: '#a1a1a1',
                        suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                        // OR //
                        beginAtZero: true   // minimum value will be 0.
                    },
                    //eje a la izquierda
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {
                        display: true,
                        color: "#a1a1a1",
                        drawOnChartArea: true
                    },
                    //si se quisiera poner otro eje id: 'y-axis-2',
                // }, {
                //     type: 'linear',
                //     display: true,
                //     ticks: {
                //         fontFamily: "Nunito",
                //         fontSize: 10,
                //         fontColor: '#a1a1a1',
                //         suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                //         // OR //
                //         beginAtZero: true,  // minimum value will be 0.
                //     }
                    
                }],
                xAxes: [{ 
                    gridLines: {
                        display: true,
                        borderDash: [5,5],
                        color: "#a1a1a1",
                        drawOnChartArea: true
                        
                    },
                    ticks: {
                      fontColor: "#CCC", // this here
                    },
                }],
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontFamily: "Nunito",
                    fontSize: 15,
                    fontColor: '#DEDEDE',
                    boxWidth: 30

                }
            }

        }




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
                            </section>
                            <section className='name-charts'>
                                Nombre
                        </section>
                        </article>
                    </main>
                </div>

                <div className="content-section-implementation">
                <Chart type="line" data={data} options={options} />


                </div>
            </div>
        )
    }
}

export default LineChart;