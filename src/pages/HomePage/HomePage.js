import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbarr';
import ChartSelector from '../../Components/ChartSelector';
import CodeEditor from '../../Components/CodeEditor';
import Equation from '../../Components/Equation/Equation';

import Toggler from '../../Components/ThemeChange/Toggler';

class HomePage extends React.Component {

    constructor() {
        super()
        this.state = {
            data: [65, 59, 80, 81, 56],
            labels: ['SampleX1', 'SampleX2', 'SampleX3', 'SampleX4']
        }
    }

    

    render() {
        const { data, labels } = this.state;
        return (
            <div>
                <Navbar />
                <Container fluid className="mb-4">
                    <Row>
                        <Col>Plot your own functions with ease</Col>
                        <Col xs md lg="8"/>
                        <Col><Toggler toggleTheme={this.props.themeToggler} /></Col>
                    </Row>
                </Container>
                <ChartSelector data={data} labels={labels} theme={this.props.theme} />
                <div style={{ marginBottom: '16px', border: '1px solid #eee', borderRadius: '8px', padding: '8px' }} className="col-sm-12">
                    <CodeEditor />
                </div>

                <div>
                    <Equation/>
                </div>
                <Footer />
            </div>
        );
    }
}


export default HomePage;
