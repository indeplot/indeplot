import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import ChartSelector from '../../Components/ChartSelector';
import CodeEditor from '../../Components/CodeEditor';
import Equation from '../../Components/Equation/Equation';
import SplashScreen from '../../Components/SplashScreen';
import generateData from '../../api/generateData';

import Toggler from '../../Components/ThemeChange/Toggler';

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            labels: []
        }
    }

    handleRefreshData = () => {
        // `requiredDataPts` is adjustable, We can create an input box on UI to configure the total number of data points to display.
        const requiredDataPts = 10;
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
                        <Col>Plot your own functions with ease</Col>
                        <Col xs md lg="8" />
                        <Col><Toggler toggleTheme={this.props.themeToggler} /></Col>
                    </Row>
                </Container>
                <ChartSelector data={data} labels={labels} theme={this.props.theme} />
                <div style={{ marginBottom: '16px', border: '1px solid #eee', borderRadius: '8px', padding: '8px' }} className="col-sm-12">
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
