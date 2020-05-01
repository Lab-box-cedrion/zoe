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

        const multiAxisData = {
			labels: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
			datasets: [{
                label: 'Temperatura',
                fill: false,
				backgroundColor: '#a4ade9',
                borderColor: '#a4ade9',
				yAxisID: 'y-axis-1',
				data: [65, 59, 80, 81, 56, 55, 10]
			}, {
                label: 'Humedad',
                fill: false,
				backgroundColor: '#84dfc4',
                borderColor: '#84dfc4',
				yAxisID: 'y-axis-2',
				data: [28, 48, 40, 19, 86, 27, 90]
            },
        ]
        };

        const multiAxisOptions = {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                    drawOnChartArea: false
                    }
                }]
            }
        }

        const lineStylesData = {
            labels: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
            datasets: [
                {
                    label: 'Temperatura',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#a4ade9'
                },
                {
                    label: 'Humedad',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    borderColor: '#84dfc4'
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: '#ffc68a',
                    backgroundColor: '#FFCC80'
                }
            ]
        };

        return (
            <div>
                <div className="content-section-introduction">
                    <div className="feature-intro">
                        {/* <h1 className= 'title-section'>Diagrama de parámetros</h1> */}
                        <p>Visualización de los parámetros recogidos.
                            Clica en la leyenda de un parámetro para ocultarlo o mostrarlo.
                            Sitúa el cursor sobre los nodos para ver el dato exacto.</p>
                    </div>
                </div>

                <div className="content-section-implementation">
                    {/* <h3>Basic</h3>
                    <Chart className= "depth-line" type="line" data={data} /> */}

                    <h3>Diagrama de Humedad y temperatura</h3>
                    <Chart type="line" data={multiAxisData, lineStylesData} options={multiAxisOptions} />

                    {/* <h3>Line Styles</h3>
                    <Chart type="line" data={lineStylesData}  /> */}
                </div>
            </div>
        )
    }
}

export default LineChart;