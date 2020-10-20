import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';


export default function CoordinateInput( props ) {
    const [xCoord, setXCoord] = useState('');
    const [yCoord, setYCoord] = useState('');

    const setCoords = e => {
        e.preventDefault();
        props.updateCoordinates(xCoord, yCoord);
        setXCoord("");
        setYCoord("");
    }
    
    return (
        <Container fluid className="m-3">
            <h4>Add your own coordinates.</h4>
            <Form>
                <Form.Group>
                    <Form.Label>Enter an X coordinate:</Form.Label>
                    <Form.Control 
                        type="number"
                        value={xCoord}
                        onChange={ e => setXCoord(e.target.value)}
                    >
                    </Form.Control>
                    <Form.Label>Enter a Y coordinate:</Form.Label>
                    <Form.Control
                        name="yCoord"
                        type="number"
                        value={yCoord}
                        onChange={ e => setYCoord(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Button onClick={setCoords}>Render</Button>   
            </Form>       
        </Container>
        

    );

}