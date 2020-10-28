import React from 'react';
import { Line } from 'react-chartjs-2';
import { Row, Col, Container } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbarr';
/* import ChartSelector from '../../Components/ChartSelector'; */
import CodeEditor from '../../Components/CodeEditor';
import CoordinateInput from '../../Components/CoordinateInput';
import Equation from '../../Components/Equation/Equation';
/* import SplashScreen from '../../Components/SplashScreen'; */


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: "",
                        data: [],
                        coords:[],
                        labelOptions: [],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)'
                        ],
                      borderWidth: 4
                     }
                ],
            },
            options: {
                    responsive: true,
                    title: {text: "", display: true},
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display:false
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display:false
                                }
                            }
                        ]
                    }

                    }
            
        }
    }

    addTitleTracking = (chartTitle, tracking) => {

        let lineChart = this.reference.chartInstance

        lineChart.options.title.text = chartTitle
        lineChart.config.data.datasets[0].label = tracking
        lineChart.update(); 

    }

    
    addLabelValue = (optionVal) => {
        let chart = this.state.chartData;

        chart.datasets.forEach((dataset) => {
            dataset.labelOptions.push(optionVal);
        });

    }


    addCoordinate = (labelValue, dataValue) => {
        let chart = this.state.chartData;

        chart.labels.push(labelValue);
        chart.datasets.forEach((dataset) => {
            dataset.data.push(dataValue);
        });
        let coord = {
            label:labelValue,
            data:dataValue 
        }
        /* update coords to include new pair of coordinates */
       chart.datasets.forEach((dataset) => {
            dataset.coords.push(coord);
        });

        let lineChart = this.reference.chartInstance
        lineChart.update(); 
    }

     deleteCoordinate = (labelValue, dataValue) => {
        let chart = this.state.chartData;
        var labelTmp = parseInt(labelValue);
        var dataTmp = parseInt(dataValue);
        var dtaTmp = chart.datasets[0].coords
        const coordIndex = dtaTmp.findIndex(coord => coord.label === labelTmp && coord.data === dataTmp);
        if (coordIndex > -1) { 
            chart.chartData.datasets[0].data.splice(coordIndex, 1)
            chart.chartData.labels.splice(coordIndex, 1)
            chart.chartData.datasets[0].coords.splice(coordIndex, 1)
            console.log('after splice', chart.chartData.datasets[0].data)
            dtaTmp = chart.chartData.datasets[0].data
            console.log('dtaTmp', dtaTmp)
        }
    
    }

    
    render() {

        return (
        <div className="App">
             <Navbar />
                <Container fluid className="mb-4">
                    <Row>
                        <Col>Welcome to Indeplot</Col>
                    </Row>
                </Container>
            <div >
                <Line ref = {(reference) => this.reference = reference} data={this.state.chartData} options={this.state.options}
                 redraw/>
            </div>
            <div
                style={{ marginBottom: '16px', border: '1px solid #eee', borderRadius: '8px', padding: '8px' }}
                className="col-sm-12"
            >
                <CodeEditor />
            </div>
            <div>
                <CoordinateInput 
                    addTitleTracking = {this.addTitleTracking}
                    addCoordinate = {this.addCoordinate}
                    deleteCoordinate = {this.deleteCoordinate}
                    addLabelValue = {this.addLabelValue}
                    label = {this.state.chartData.datasets[0].label}
                    title = {this.state.options.title.text}
                    data = {this.state.chartData.datasets[0].data}
                    labels={this.state.chartData.labels}
                    coords={this.state.chartData.datasets[0].coords}
                    labelOptions = {this.state.chartData.datasets[0].labelOptions}
                />
            </div>
            <div>
                <Equation />
            </div>
            <Footer />
            
            {/* <ChartSelector data={data} labels={labels} updateChart={this.updateChart} onRefreshData={this.handleRefreshData} /> */}
            
            
        </div>
    );

    }

    
    
}

export default HomePage;
