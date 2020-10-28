import React, { useEffect, useState, useRef } from 'react';
import { Form, Button, Col } from 'react-bootstrap';


export default function CoordinateInput( props ) {
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0); 
    const [selectedCoord, setSelectedCoord] = useState({
        x: '',
        y: ''
    });
    const [addReady, setAddReady] = useState(false);
    const [delReady, setDelReady] = useState(false);

    const delCoord = () => {
        var splitCoord = selectedCoord.split(', ');
        setXCoord(splitCoord[0])
        setYCoord(splitCoord[1])
        setDelReady(true);
    }

    const addCoord = () => {
        setAddReady(true);
    }

    useEffect(() => {
        if (delReady) {
            props.deleteCoordinate(xCoord, yCoord)
        }
        if (addReady) {
            props.addCoordinate(xCoord, yCoord)
        }
        setDelReady(false);
        setAddReady(false)
        console.log("data", props.data);
    }, [props, xCoord, yCoord, addReady, delReady])


    return (
        <div className="d-flex flex-column form-group col-sm-12">
            <div className="d-flex flex-row"> 
                    <h1> Add/Delete a Coordinate</h1>    
                </div>
                
            <Form>
                <Form.Row>          
                    <Form.Group as={Col} xs={6} className="d-flex p-2">
                        <Form.Control
                            style={{width:"45%", marginRight:"5px", textAlign:"center", border:"1px solid lightgray", borderRadius: "4px"}}
                            value={xCoord}
                            onChange={ e => setXCoord(parseInt(e.target.value))}
                            custom
                            size="med"
                            placeholder="Enter X coordinate"
                        >
                        </Form.Control>
                        <Form.Control

                            style={{width:"45%", marginLeft:"5px", textAlign:"center",border:"1px solid lightgray", borderRadius: "4px"}}
                            value={yCoord}
                            onChange={ e => setYCoord(parseInt(e.target.value))} 
                            custom
                            size="med"
                            placeholder="Enter Y coordinate"
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button 
                            style={{margin: '10px', padding: '8px', width:'75%' }} 
                            className="btn btn-primary" 
                            onClick={addCoord}
                        >
                            Add Coordinate
                        </Button> 
                    </Form.Group>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} xs={6} className="d-flex p-2">
                         <Form.Control 
                            as="select"
                            defaultValue=""
                            onChange={ e => setSelectedCoord(e.target.value)}
                            style={{width:"94%", textAlign:"center"}}
                        >
                            <option disabled={true} value="">Select coordinate</option>
                        {props.data.map(( e, key) => {
                                return <option
                                            key={key} 
                                            value={e.value}
                                            >
                                                {e.x}, {e.y}
                                        </option>
                            })}
                        </Form.Control>

                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button 
                            style={{margin: '10px', padding: '8px', width:'75%'}} 
                            className="btn btn-primary" 
                            onClick={delCoord}
                        >
                            Delete Coordinate
                        </Button> 
                    </Form.Group>
                </Form.Row>
            </Form>  
        </div>     
        

    );

}