import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


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
        <div className="d-flex flex-column form-group col-sm-12">
            <div className="d-flex flex-row"> 
                    <h1> X and Y</h1>
                    <Button style={{margin: '10px', padding: '8px' }} className="btn btn-primary" onClick={setCoords}>Render</Button> 
                </div>
            <Form>
                <Form.Row className="justify-content-center mb-3">
                        <Form.Control 
                            type="number"
                            className="mr-sm-2 col-sm-2"
                            style={{width:"25%",margin:"10px", textAlign:"center"}}
                            value={xCoord}
                            onChange={ e => setXCoord(e.target.value)}
                            custom
                            size="med"
                            placeholder="X"
                        >
                        </Form.Control>

                        <Form.Control
                            className="mr-sm-2 col-sm-2"
                            style={{width:"25%", margin:"10px", textAlign:"center"}}
                            type="number"
                            value={yCoord}
                            onChange={ e => setYCoord(e.target.value)}
                            custom
                            size="med"
                            placeholder="Y"
                        >
                        </Form.Control>
                </Form.Row>
            </Form>  
        </div>     
        

    );

}