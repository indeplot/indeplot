import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Charts from '../Charts/Charts'
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbarr';
import CodeEditor from '../../Components/CodeEditor';

class HomePage extends React.Component {

    constructor() {
        super()
        this.state = {
            data: [65, 59, 80, 81, 56],
            labels: ['SampleX1', 'SampleX2', 'SampleX3',
                'SampleX4']
        }
    }

    render() {
        return (
          <div>
            <Navbar />
            <Row>
              <Col>
                This is is the Home Page and This coding style should be
                followed
              </Col>
            </Row>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <Charts
                    chartType="Line"
                    labels={this.state.labels}
                    title="Sample 1"
                    data={this.state.data}
                    options={{}}
                  />
                </div>
                <div className="col-sm-6">
                  <Charts
                    chartType="Bar"
                    labels={this.state.labels}
                    title="Sample 2"
                    data={this.state.data}
                    options={{}}
                  />
                </div>
              </div>
              <div style={{marginBottom: '16px', border: '1px solid #eee', borderRadius: '8px', padding: '8px'}} className="col-sm-12">
                <CodeEditor />
              </div>
            </div>
            <Footer />
          </div>
        );
    }
}


export default HomePage;
