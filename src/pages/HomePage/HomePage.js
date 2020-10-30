import React from 'react';
/* import { Line } from 'react-chartjs-2'; */
import { Row, Col, Container } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbarr';
import ChartSelector from '../../Components/ChartSelector';
import CodeEditor from '../../Components/CodeEditor';
/* import CoordinateInput from '../../Components/CoordinateInput'; */
import Equation from '../../Components/Equation/Equation';
import SplashScreen from '../../Components/SplashScreen';


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        /* this.state = {
            chartData: {
                labels: ["june", "july", "may"],
                datasets: [
                    {
                        label: 'Label:  tracking rainfall',
                        data: [10, 30, 50],
                        coords:[],
                        labelOptions: ["may", "june", "july", "aug"],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)'
                        ],
                      borderWidth: 4
                     }
                ],
            },
            options: {
                legend: { position: "bottom"},
                responsive: true,
                title: {text: "title:of the whole chart", display: true},
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
                            beginAtZero: true,
                            ticks: {
                                autoSkip:false
                            },
                            gridLines: {
                                display:false
                            }
                        }
                    ]
                }

            } 
        } */

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


    
    render() {
        /* const { data, labels, showSplashScreen } = this.state; */
  

       /*  if (showSplashScreen) {
            return <SplashScreen />;
        } */


        return (
        <div className="App">
             <Navbar />
                <Container fluid className="mb-4">
                    <Row>
                        <Col>Welcome to Indeplot</Col>
                    </Row>
                </Container>
            <div ref={(reference) => this.reference = reference} >
                <ChartSelector
                    updateChart={this.updateChart} 
                    onRefreshData={this.handleRefreshData} 
                />
               {/* <Line 
                    ref = {(reference) => this.reference = reference} 
                    data={this.state.chartData} 
                    options={this.state.options}
                 redraw/> */}
            </div>
            <div
                style={{ marginBottom: '16px', border: '1px solid #eee', borderRadius: '8px', padding: '8px' }}
                className="col-sm-12"
            >
                <CodeEditor />
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
