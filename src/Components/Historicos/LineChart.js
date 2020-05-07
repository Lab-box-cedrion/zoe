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

        // console.log(this.props.location.state.data)
        
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
            labels: ['0','2s', '4s', '6s', '8s', '10s', '12s', '14s'],
            datasets: [
                {
                    label: 'Temperatura ºC',
                    // bodyFontFamily: 'Nunito, sans-serif',
                    // titleFontFamily: 'Nunito, sans-serif',
                    fontColor: 'rgb(255, 255, 255)',
                    // titleFontSize: 500,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#7E8CE0',
                    backgroundColor:'rgb(255, 255, 255)'
                },
                {
                    label: 'Humedad %',
                    fontColor: 'rgb(255, 255, 255)',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: true,
                    borderDash: [5, 5],
                    borderColor: '#84dfc4',
                    backgroundColor: 'rgba(132, 223, 196, 0.7)'
                },
                {
                    label: 'Ozono %',
                    fontColor: 'rgb(255, 255, 255)',
                    data: [12, 51, 62, 33, 21, 62, 45],
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
                    <Chart type="line" data={ lineStylesData } option= {options}/>

                </div>
            </div>
        )
    }
}

export default LineChart;