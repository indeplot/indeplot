import React, { Component } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Charts from '../pages/Charts/Charts';
import ColorPicker from './ColorPicker';

const chartTypes = ['Bar', 'Line'];

class CharSelector extends Component {
    state = {
        selected: 'Bar',
        color: '#4bc0c0'
    }

    handleSelect = (e) => {
        this.setState({ selected: e.target.value });
    }

    handleColors = (picked) => {
        this.setState({ color: picked });
    }

    render() {
        const { selected, color } = this.state;
        return (
            <Container>
                <Row className="justify-content-center mb-3">
                    <Form inline>
                        <Form.Label className="mr-2">Select Chart Type</Form.Label>
                        <Form.Control as="select" onChange={this.handleSelect} value={selected} custom size="sm">
                            {chartTypes.map((item, i) => <option key={i} value={item}>{item}</option>)}
                        </Form.Control>
                    </Form>
                    <ColorPicker onSelectPicker={this.handleColors} pickedColor={color} />
                </Row>
                <Row>
                    <Col>
                        <Charts chartType={selected} title="Sample" bgColor={color} {...this.props} options={{}} />
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
