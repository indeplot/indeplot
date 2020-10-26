import React, { useEffect, useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';


export default function CoordinateInput( props ) {
    const [dataCoord, setData] = useState(0);
    const [labelsCoord, setLabels] = useState(0);
    const [selectedCoord, setSelectedCoord] = useState({data:0, labels:0});
    const [addUpdate, setAddUpdate] = useState(false);

    
    const setCoords = e => {
        e.preventDefault();
        setSelectedCoord({...selectedCoord,data:dataCoord, labels:labelsCoord})
        setAddUpdate(true);
        setData("");
        setLabels("");
    }

    const updateCoord = (coord) => {
        var [data, labels] = coord.split(', ');
        data=parseInt(data);
        labels=parseInt(labels);
        setSelectedCoord({...selectedCoord,data:data, labels:labels});
    }

    const delCoord = () => {
        props.deleteCoordinate(selectedCoord);
    }

    useEffect(() => {
        if (addUpdate) {
            props.addCoordinate(selectedCoord);
        }
        setAddUpdate(false);
    }, [addUpdate, props, selectedCoord])

    return (
        <div className="d-flex flex-column form-group col-sm-12">
            <div className="d-flex flex-row"> 
                    <h1> Data and Label</h1>    
                </div>
                
            <Form>
                <Form.Row>
                    <Form.Group as={Col} xs={6} className="d-flex p-2">
                        <Form.Control
                            type="number"
                            style={{width:"45%",marginRight:"5px", textAlign:"center"}}
                            value={dataCoord}
                            onChange={ e => setData(parseInt(e.target.value))}
                            custom
                            size="med"
                            placeholder="0"
                        >
                        </Form.Control>
                        <Form.Control
                            type="number"
                            style={{width:"45%", marginLeft:"5px", textAlign:"center"}}
                            value={labelsCoord}
                            onChange={ e => setLabels(parseInt(e.target.value))} 
                            custom
                            size="med"
                            placeholder="0"
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button style={{margin: '10px', padding: '8px', width:'75%' }} className="btn btn-primary" onClick={setCoords}>Add Coordinate</Button> 
                    </Form.Group>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} xs={6} className="d-flex p-2">
                         <Form.Control 
                            as="select"
                            onChange={ e => updateCoord(e.target.value)}
                            style={{width:"94%", textAlign:"center"}}
                        >
                        {props.coords.map(( e, key ) => {
                                return <option key={key} value={e.value}>{e.value}{e.data}, {e.labels}</option>;
                            })}
                        </Form.Control>

                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button style={{margin: '10px', padding: '8px', width:'75%'}} className="btn btn-primary" onClick={delCoord}>Delete Coordinate</Button> 
                    </Form.Group>
                </Form.Row>
            </Form>  
        </div>     
        

    );

}