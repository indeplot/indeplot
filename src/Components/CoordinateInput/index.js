import React, { useState, useEffect } from 'react';
import { useInput } from '../../hooks/input-hook';

import { Form, Col } from 'react-bootstrap';

export default function CoordinateInput( props ) {

    const [coords, setCoords] = useState([]);
    const [labelTypes] = useState(['months of the year', 'days of the week', 'increments']);
    const [selectedLabelType, setSelectedLabelType] = useState('increments');
    const [labelsSelected, setLabelsSelected] = useState(['10','20', '30', '40', '50']);
    const [labelsUpdated, setLabelsUpdated] = useState(false);
    const [labelsSecondUpdate, setLabelsSecondUpdate] = useState(false);

    const { value:chartTitle, bind:bindChartTitle, reset:resetChartTitle } = useInput('');
    const { value:tracking, bind:bindTracking, reset:resetTracking } = useInput('');
    const { value:labelValue, bind:bindLabelValue, reset:resetLabelValue } = useInput('');
    const { value:dataValue, bind:bindDataValue, reset:resetDataValue } = useInput('');
    const { value:labelTypeSelection, bind:bindLabelTypeSelection } = useInput('');
    const { value:coordsOption, bind:bindCoordsOption, reset:resetCoordsOption } = useInput('');
         
    const handleTitleTrackingSubmit = (evt) => {
        evt.preventDefault();
        props.addTitleTracking(chartTitle, tracking);
        resetChartTitle();
        resetTracking();
    }

   const addCoord = (evt) => {
        evt.preventDefault();
        if ((labelValue === '' || undefined) || (dataValue === '' || undefined) ){
             alert('you need to choose a label and a y-value before adding');
        } else {
            props.addCoordinate(labelValue, dataValue)
            let coord = {
                label:labelValue,
                data:dataValue 
            }
            let coordString = `${coord.label}, ${coord.data}`
            setCoords([...coords,coordString]);
            resetDataValue();
            resetLabelValue();

        }
       
    } 

    const delCoord = (evt) => {
        evt.preventDefault()
        let coordIndex = coords.indexOf(coordsOption);
        var splitCoord = coordsOption.split(',');
        splitCoord[1] = parseInt(splitCoord[1]);
        coords.splice(coordIndex, 1);
        props.deleteCoordinate(splitCoord[0], splitCoord[1])
        resetCoordsOption();
    }

    const addLabelTypeOption = (evt) => {
        evt.preventDefault(); 
      /*   let temp; */
        setLabelsSelected([])
        setLabelsUpdated(true);

       
        switch(labelTypeSelection) {
            
            case 'months of the year':
                setSelectedLabelType('months');
                setLabelsSelected(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
                setLabelsSecondUpdate(true);
                return;
           case 'days of the week':
                setSelectedLabelType('weekdays');
                setLabelsSelected(['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
                setLabelsSecondUpdate(true);
                return;
            case 'increments':
                setSelectedLabelType('increments');
                setLabelsSelected(['10','20', '30', '40', '50'])
                setLabelsSecondUpdate(true);
                return; 
            default:
                setSelectedLabelType('increments');
                setLabelsSelected(['10','20', '30', '40', '50'])
                setLabelsSecondUpdate(true);
                return;
        }   
    }

    const labelTypesOptions = labelTypes.map( labelType => {
        return <option key={labelType} value={labelType}>{labelType}</option>
    });
    
    const coordsOptions = coords.map((coord, index) => {
        return <option key={index} value={coord}>{coord}</option>
    }) 

    let labelOptions = labelsSelected.map( label => {
        return <option key={label} value={label}>{label}</option>
    });

    

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
                                placeholder="Title"
                                {...bindChartTitle}
                            >
                            </Form.Control>
                            <Form.Control
                                type="text"
                                style={{width:"42%", marginLeft:"5px", paddingLeft:"8px", border:"1px solid lightgray", borderRadius: "4px"}}
                                custom
                                size="med"
                                placeholder="Label"
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

               <Form onSubmit={addLabelTypeOption}>
                <Form.Row>          
                    <Form.Group as={Col} xs={6} className="d-flex p-2">
                        <Form.Control
                            as="select"
                            placeholder="Select label type"
                            {...bindLabelTypeSelection}
                        >
                            <option disabled={true} value="">Label type</option>
                            {labelTypesOptions}
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
                            {...bindLabelValue}
                        >
                            <option disabled={true} value="">Labels</option>
                            {labelOptions}
                        </Form.Control>
                        <Form.Control
                            type="number"
                            style={{width:"42%", marginLeft:"5px", textAlign:"center",border:"1px solid lightgray", borderRadius: "4px"}}
                            custom
                            size="med"
                            placeholder="Y"
                            {...bindDataValue}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control
                            type="submit"
                            value="Add coordinate"
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
                            <option disabled={true} value="">Coordinate</option>
                            {coordsOptions}
                        </Form.Control>

                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control
                            type="submit"
                            value="Delete coordinate"
                            className="btn btn-primary"
                            style={{margin: '10px', padding: '8px', width:'75%'}} 
                        />
                    </Form.Group>
                </Form.Row> 
            </Form> 
           
        </div>     
        

    );

}