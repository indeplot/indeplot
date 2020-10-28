import React from 'react';
import { Line } from 'react-chartjs-2';
import { Row, Col, Container } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbarr';
import ChartSelector from '../../Components/ChartSelector';
import CodeEditor from '../../Components/CodeEditor';
import CoordinateInput from '../../Components/CoordinateInput';
import Equation from '../../Components/Equation/Equation';
import SplashScreen from '../../Components/SplashScreen';


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

    /* handleRefreshData = () => {
        // `requiredDataPts` is adjustable, We can create an input box on UI to configure the total number of data points to display.
        const requiredDataPts = 0;
        // `upperLimit` and `lowerLimit` can be anything between -100 to 100. Got to generateData.js to find more.
        const { data, labels } = generateData(10, 100, { floating: false, count: requiredDataPts });
        this.setState({ data, labels });
    } */

    componentDidMount() {
       /*  this.handleRefreshData(); */
        setTimeout(() => {
            this.setState({ showSplashScreen: false })
        }, 2000);
    }

    updateChart = ( chart ) => {
        this.setState({chart: chart});
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
        let lineChart = this.reference.chartInstance
        let chart = this.state.chartData;
        var dtaTmp = lineChart.config.data.datasets[0].coords
        const coordIndex = dtaTmp.findIndex(coord => coord.label === labelValue && coord.data === dataValue);
        if (coordIndex > -1) { 

            lineChart.config.data.datasets[0].data.splice(coordIndex, 1)
            chart.labels.splice(coordIndex, 1)
            lineChart.config.data.datasets[0].coords.splice(coordIndex, 1)
           
        }
        lineChart.update(); 
    
    }

    
    render() {
        const { data, labels, showSplashScreen } = this.state;
  

        if (showSplashScreen) {
            return <SplashScreen />;
        }


        return (
        <div className="App">
             <Navbar />
                <Container fluid className="mb-4">
                    <Row>
                        <Col>Welcome to Indeplot</Col>
                    </Row>
                </Container>
            <div >
                {/* <ChartSelector data={data} labels={labels} updateChart={this.updateChart} onRefreshData={this.handleRefreshData} /> */}

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
            
            
        </div>
    );

    }

    
    
}

export default HomePage;
