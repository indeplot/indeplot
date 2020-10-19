import React, { Component } from 'react';
import { Col, Container, Form, Row, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Charts from '../pages/Charts/Charts';
import { SketchPicker } from 'react-color';

const chartTypes = ['Bar', 'Line'];

class CharSelector extends Component {
    state = {
        selected: 'Bar',
        color: {
            r:'75',
            g:'192',
            b:'192',
            a:'1',
        },
        colorPickerOn:false,
    }

    handleSelect = (e) => {
        this.setState({ selected: e.target.value })
    }

    handleColor = (e) => {
        this.setState({ color: e.rgb, colorPickerOn:false});
    }
    
    handleColorPicker = (e) => {
        this.setState({colorPickerOn: !this.state.colorPickerOn});
    }

    handleModalClose = (e) => {
        this.setState({colorPickerOn: false});
    }

    render() {
        const { selected, color, colorPickerOn } = this.state;
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
                    <span>&nbsp;</span>
                    <Button as="input" type="button" value="Color Picker" variant="outline-dark" onClick={this.handleColorPicker} />
                    <Modal show={colorPickerOn} onHide={this.handleModalClose}>
                        <Modal.Header closeButton>
                            Color Picker
                        </Modal.Header>
                        <Modal.Body>
                            <SketchPicker
                                width="95%"
                                color={this.state.color}
                                onChangeComplete={this.handleColor}
                            />
                        </Modal.Body>
                    </Modal>
                </Form>
                <Row>
                    <Col>
                        <Charts chartType={selected} chartColor={color} labels={labels} title="Sample" data={data} options={{}} />
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
