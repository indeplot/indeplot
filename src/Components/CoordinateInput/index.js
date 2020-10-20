import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';


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
        <Container className="mt-2 mb-5">
            <Form>
                <Row><h3>Add your own coordinates.</h3></Row>
                <Row className="align-items-end">
                    <Col>
                        <p>Enter an X coordinate:</p>
                        <input
                            name="xCoord"
                            type="number"
                            value={xCoord}
                            onChange={ e => setXCoord(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <p>Enter a Y coordinate:</p>
                        <input
                            name="yCoord"
                            type="number"
                            value={yCoord}
                            onChange={ e => setYCoord(e.target.value)}

                        />
                    </Col>
                    <Col xs={6}>
                        <div className="align-middle"><Button onClick={setCoords}>Render</Button></div>
                        
                    </Col>
                </Row>
            </Form>
        </Container>
        

    );

}