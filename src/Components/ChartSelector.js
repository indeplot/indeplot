import React, { Component } from 'react';
import { Col, Container, Form, Row, Button, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Charts from '../pages/Charts/Charts';
import { SketchPicker } from 'react-color';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faChartLine, faChartBar } from '@fortawesome/free-solid-svg-icons';

const chartTypes = ['Bar', 'Line', 'Polar', 'Doughnut', 'Pie', 'HorizontalBar'];

const pieIcon = <FontAwesomeIcon icon={faChartPie} />;
const lineIcon = <FontAwesomeIcon icon={faChartLine} />;
const barIcon = <FontAwesomeIcon icon={faChartBar} />;
const polarIcon = pieIcon; // no polar chart icon in free-solid-svg-icons
const doughnutIcon = pieIcon; // no doughnut chart icon in free-solid-svg-icons

const chartTypeIcons = {
    Bar: barIcon,
    Line: lineIcon,
    Polar: polarIcon,
    Doughnut: doughnutIcon,
    Pie: pieIcon
};

class CharSelector extends Component {
    state = {
        selected: 'Bar',
        color: {
            r:'75',
            g:'192',
            b:'192',
            a:'1',
        }, 
        colorValue:'',
        colorPickerOn:false,
    }

    handleSelect = (key, e) => {
        this.setState({ selected: key});
        this.props.updateChart(key);
    }

    handleColors = (picked) => {
        this.setState({ color: picked });
    }

    handleColor = (e) => {
        this.setState({ color: e.rgb, colorPickerOn: false });
        let colorVal = `rgba(${this.state.color.r},${this.state.color.g},${this.state.color.b},${this.state.color.a})`;
        this.setState({colorValue: colorVal})

    }

    handleColorPicker = (e) => {
        this.setState({ colorPickerOn: !this.state.colorPickerOn });
    }

    handleModalClose = (e) => {
        this.setState({ colorPickerOn: false });
    }

    refreshData = () => {
        this.props.onRefreshData();
    }

    render() {
        const { selected, color, colorValue, colorPickerOn } = this.state;

        const { data, labels } = this.props;
        return (
            <Container>
                <Form inline className="justify-content-center mb-3">
                    <Form.Label className="mr-2">
                        Select Chart Type
                    </Form.Label>
                    <DropdownButton className="chart-type-selector" title={selected} variant="outline-dark" onSelect={this.handleSelect}>
                        {chartTypes.map((item, i) =>
                            <Dropdown.Item key={i} eventKey={item} >{chartTypeIcons[item]}{item}</Dropdown.Item>
                        )}
                    </DropdownButton>
                    <span>&nbsp;</span>
                    <Button as="input" type="button" value="Color Picker" variant="outline-dark" onClick={this.handleColorPicker} />
                    <Button type="button" variant="outline-dark" onClick={this.refreshData} className="ml-1">Refresh</Button>
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
                        <Charts chartType={selected} chartColor={color} chartColorValue={colorValue} labels={labels} title="Sample" data={data} options={{}} />
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
