import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


export default class ColorPicker extends Component {
    hadleChange = e => {
        this.props.onSelectPicker(e.target.value);
    }
    render() {
        const { pickedColor } = this.props;
        return (
            <Form inline>
                <Form.Label className="ml-4 mr-2">Color</Form.Label>
                <input
                    className="color-picker"
                    type="color"
                    value={pickedColor}
                    onChange={this.hadleChange} />
            </Form>
        )
    }
}
