import React from 'react';
import { useInput } from '../../hooks/input-hook'

import { Form, Button, Col } from 'react-bootstrap';

export default function CoordinateInput( props ) {
    const { value:chartTitle, bind:bindChartTitle, reset:resetChartTitle } = useInput('');
    const { value:tracking, bind:bindTracking, reset:resetTracking } = useInput('');
    const { value:labelValue, bind:bindLabelValue, reset:resetLabelValue } = useInput('');
    const { value:data, bind:bindData, reset:resetData } = useInput(0);
    const { value:labelOption, bind:bindLabelOption, reset:resetLabelOption } = useInput('');
    const { value:coordsOption, bind:bindCoordsOption, reset:resetCoordsOption } = useInput('');


    /* const [labelCoord, setLabelCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);  */
    /* const [selectedCoord, setSelectedCoord] = useState({label: '', data: ''}); */

    const handleTitleTrackingSubmit = (evt) => {
        evt.preventDefault();
        props.addTitleTracking(chartTitle, tracking);
        resetChartTitle();
        resetTracking();
    }

    const addCoord = (evt) => {
        evt.preventDefault();
        props.addCoordinate(labelOption, data)
        resetData();
        resetLabelOption();
    }

    const delCoord = (evt) => {
        evt.preventDefault()
        alert(`Submitting coord for deletion ${coordsOption},`)
        var splitCoord = coordsOption.split(', ');
       /*  setLabelCoord(splitCoord[0])
        setYCoord(splitCoord[1]) */
        props.deleteCoordinate(splitCoord[0], splitCoord[1])
        resetCoordsOption();
    }

    const addLabelValue = (evt) => {
        evt.preventDefault();
        props.addLabelValue(labelValue)
        resetLabelValue();
    }

    const labelOptions = props.labelOptions.map( label => {
        return <option value={label}>{label}</option>
    })
    
    const coordsOptions = props.coords.map((coord) => {
        return <option value={coord.label.value}>{coord.label}, {coord.data}</option>
    })


    return (
        <div className="d-flex flex-column form-group col-sm-12">
            <div className="d-flex flex-row"> 
                    <h1> About your chart</h1>    
                </div>
                <Form onSubmit={handleTitleTrackingSubmit}>
                    <Form.Row>          
                        <Form.Group as={Col} xs={6} className="d-flex p-2">
                        
                            <Form.Control
                                type="text"
                                style={{width:"42%", marginLeft:"5px", paddingLeft:"8px", border:"1px solid lightgray", borderRadius: "4px"}}
                                custom
                                size="med"
                                placeholder="Chart Title"
                                {...bindChartTitle}
                            >
                            </Form.Control>
                            <Form.Control
                                type="text"
                                style={{width:"42%", marginLeft:"5px", paddingLeft:"8px", border:"1px solid lightgray", borderRadius: "4px"}}
                                custom
                                size="med"
                                placeholder="Tracking"
                                {...bindTracking}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control
                                type="submit"
                                value="Submit"
                                className="btn btn-primary"
                                style={{margin: '10px', padding: '8px', width:'75%' }} 
                            />
                        </Form.Group>
                    </Form.Row>
                </Form>

                <Form onSubmit={addLabelValue}>
                <Form.Row>          
                    <Form.Group as={Col} xs={6} className="d-flex p-2">
                        <Form.Control
                            type="text"
                            style={{width:"84%", marginLeft:"5px", paddingLeft:"8px", border:"1px solid lightgray", borderRadius: "4px"}}
                            custom
                            size="med"
                            placeholder="Enter label value"
                            {...bindLabelValue}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control
                            type="submit"
                            value="Add Label"
                            className="btn btn-primary" 
                            style={{margin: '10px', padding: '8px', width:'75%' }} 
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
                
            <Form onSubmit={addCoord}>
                <Form.Row>          
                    <Form.Group as={Col} xs={6} className="d-flex p-2">
                        <Form.Control 
                            as="select"
                            style={{width:"42%", textAlign:"center"}}
                            {...bindLabelOption}
                        >
                            <option disabled={true} value="">X Coord</option>
                            {labelOptions}
                        </Form.Control>
                        <Form.Control
                            type="number"
                            style={{width:"42%", marginLeft:"5px", textAlign:"center",border:"1px solid lightgray", borderRadius: "4px"}}
                            custom
                            size="med"
                            placeholder="Y value"
                            {...bindData}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control
                            type="submit"
                            value="Add Coordinate"
                            className="btn btn-primary" 
                            style={{margin: '10px', padding: '8px', width:'75%' }} 
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
             <Form onSubmit={delCoord}>
                <Form.Row>
                    <Form.Group as={Col} xs={6} className="d-flex p-2">
                         <Form.Control 
                            as="select"
                            defaultValue=""
                            style={{width:"84%", textAlign:"center"}}
                            {...bindCoordsOption}
                        >
                            <option disabled={true} value="">Select coordinate</option>
                            {coordsOptions}
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