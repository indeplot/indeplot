import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbarr';
import ChartSelector from '../../Components/ChartSelector';
import CodeEditor from '../../Components/CodeEditor';
import CoordinateInput from '../../Components/CoordinateInput';
import Equation from '../../Components/Equation/Equation';
import SplashScreen from '../../Components/SplashScreen';
import generateData from '../../api/generateData';

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            chart: 'bar',
            data: [],
            labels: []
        }
    }

    handleRefreshData = () => {
        // `requiredDataPts` is adjustable, We can create an input box on UI to configure the total number of data points to display.
        const requiredDataPts = 0;
        // `upperLimit` and `lowerLimit` can be anything between -100 to 100. Got to generateData.js to find more.
        const { data, labels } = generateData(10, 100, { floating: false, count: requiredDataPts });
        this.setState({ data, labels });
    }

    componentDidMount() {
        this.handleRefreshData();
        setTimeout(() => {
            this.setState({ showSplashScreen: false })
        }, 2000);
    }

    updateCoordinates = ( xCoord, yCoord )  => {
        this.setState( prevState => ({
            data: [...prevState.data, xCoord]
        }));
        this.setState( prevState => ({
            labels: [...prevState.labels, yCoord]
        }));
    }

    updateChart = ( chart ) => {
        this.setState({chart: chart});
    }


    render() {
        const { data, labels, showSplashScreen } = this.state;
  

        if (showSplashScreen) {
            return <SplashScreen />;
        }

        return (
            <div>
                <Navbar />
                <Container fluid className="mb-4">
                    <Row>
                        <Col>Welcome to Indeplot</Col>
                    </Row>
                </Container>
                <ChartSelector data={data} labels={labels} updateChart={this.updateChart} onRefreshData={this.handleRefreshData} />
                <div
                    style={{ marginBottom: '16px', border: '1px solid #eee', borderRadius: '8px', padding: '8px' }}
                    className="col-sm-12"
                >
                    <CodeEditor />
                </div>
                <div>
                    <CoordinateInput updateCoordinates = {this.updateCoordinates} />
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
