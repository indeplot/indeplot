import React, { Component } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Charts from '../pages/Charts/Charts';

const chartTypes = ['Bar', 'Line', 'Polar'];

class CharSelector extends Component {
    state = {
        selected: 'Bar'
    }

    handleSelect = (e) => {
        this.setState({ selected: e.target.value })
    }

    render() {
        const { selected } = this.state;
        const { data, labels } = this.props;
        return (
            <Container>
                <Form inline className="justify-content-center mb-3">
                    <Form.Label className="mr-2">
                        Select Chart Type
                    </Form.Label>
                    <Form.Control as="select" onChange={this.handleSelect} value={selected} custom size="sm">
                        {chartTypes.map((item, i) => <option key={i} value={item}>{item}</option>)}
                    </Form.Control>
                </Form>
                <Row>
                    <Col>
                        <Charts chartType={selected} labels={labels} title="Sample" data={data} options={{}} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CharSelector;

CharSelector.propTypes = {
    data: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired
}
