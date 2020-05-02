import React, { Component } from 'react';
import './Charts.scss';
import { Chart } from 'primereact/chart';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


class LineChart extends Component {

    render() {
        // const data = {
        //     labels: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
        //     datasets: [
        //         {
        //             label: 'Temperatura',
        //             data: [65, 59, 80, 81, 56, 55, 40],
        //             fill: false,
        //             backgroundColor: '#a4ade9',
        //             borderColor: '#a4ade9'
        //         },
        //         {
        //             label: 'Humedad',
        //             data: [28, 48, 40, 19, 86, 27, 90],
        //             fill: false,
        //             backgroundColor: '#84dfc4',
        //             borderColor: '#84dfc4'
        //         }
        //     ]
        // };
        
        const singleAxisData = {
			labels: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
			datasets: [{
                label: 'Temperatura',
                fontColor: 'rgb(255, 255, 255)',
                fill: false,
				backgroundColor: '#a4ade9',
                borderColor: '#a4ade9',
                yAxisID: 'y-axis-1',
                
				data: [65, 59, 80, 81, 56, 55, 10]
			}, {
                label: 'Humedad',
                fontColor: 'rgb(255, 255, 255)',
                fill: false,
				backgroundColor: '#84dfc4',
                borderColor: '#84dfc4',
				yAxisID: 'y-axis-2',
				data: [28, 48, 40, 19, 86, 27, 90]
            },
            
        ]
        };

        const singleAxisOptions = {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            fontSize: 500,
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',

                }
            ]
        }
        }

        const lineStylesData = {
            labels: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
            datasets: [
                {
                    label: 'Temperatura',
                    fontColor: 'rgb(255, 255, 255)',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#a4ade9',
                    backgroundColor:'white'
                },
                {
                    label: 'Humedad',
                    fontColor: 'rgb(255, 255, 255)',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: true,
                    borderDash: [5, 5],
                    borderColor: '#84dfc4',
                    backgroundColor: 'rgba(132, 223, 196, 0.7)'
                },
                {
                    label: 'Third Dataset',
                    fontColor: 'rgb(255, 255, 255)',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: '#ffc68a',
                    backgroundColor: 'rgba(255, 198, 138)'
                    
                }
            ]
        };

        

        return (
            <div className='outerbox'>
                <div className="content-section-introduction">
                    <div className="feature-intro">
                        <h1 className= 'title-section'>Diagrama de parámetros</h1>
                        <p className='instructions'>Visualización de los parámetros recogidos.
                            Clica en la leyenda de un parámetro para ocultarlo o mostrarlo.
                            Sitúa el cursor sobre los nodos para ver el dato exacto.</p>
                    </div>
                    <main className= 'container-charts'>
                    <article className='pair-charts'>
                        <section className= 'date-time-charts'>
                        aa mm dd hh:mm 
                        </section>
                        <section className='name-charts'>
                        Nombre
                        </section>
                    </article>
                    </main>
                </div>

                <div className="content-section-implementation">
                    <Chart type="line" data={singleAxisData, lineStylesData} option= {singleAxisOptions}/>

                </div>
            </div>
        )
    }
}

export default LineChart;