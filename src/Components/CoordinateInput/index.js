import React, { useState } from 'react';
import { useInput } from '../../hooks/input-hook';

import { Form, Col } from 'react-bootstrap';

export default function CoordinateInput( props ) {

/*     const [labelOptions, setLabelOptions] = useState([]); */
    const [coords, setCoords] = useState([]);
    const [labelTypes] = useState(['months of the year', 'days of the week', 'increments'])
/*     const [labelTypeSelection, setLabelTypeSelection] = useState(''); */
    const [months] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    const [weekdays, setWeekdays] = useState(['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    const [increments, setincrements] = useState(['10','20', '30', '40', '50']);
    const [labelsSelected, setLabelsSelected] = useState([])

    const { value:chartTitle, bind:bindChartTitle, reset:resetChartTitle } = useInput('');
    const { value:tracking, bind:bindTracking, reset:resetTracking } = useInput('');
    const { value:labelValue, bind:bindLabelValue, reset:resetLabelValue } = useInput('');
    const { value:dataValue, bind:bindDataValue, reset:resetDataValue } = useInput(0);
    const { value:labelTypeSelection, bind:bindLabelTypeSelection, reset:resetLabelTypeSelection } = useInput('');
    const { value:coordsOption, bind:bindCoordsOption, reset:resetCoordsOption } = useInput('');
 
         
    const handleTitleTrackingSubmit = (evt) => {
        evt.preventDefault();
        props.addTitleTracking(chartTitle, tracking);
        resetChartTitle();
        resetTracking();
    }

   const addCoord = (evt) => {
        evt.preventDefault();
        props.addCoordinate(labelValue, dataValue)
        let coord = {
            label:labelValue,
            data:dataValue 
        }
        let coordString = `${coord.label}, ${coord.data}`
        console.log('coordString', coordString)
        setCoords([...coords,coordString]);

        /* update coords to include new pair of coordinates */
        console.log('coords', coords);
        console.log('coordsOption!!!', coordsOption)

        resetDataValue();
        resetLabelValue();
    } 

    const delCoord = (evt) => {
        evt.preventDefault()
        console.log('coordsOption', coordsOption);

        var splitCoord = coordsOption.split(',');
        console.log('spliCoords', splitCoord[0], splitCoord[1])
        props.deleteCoordinate(splitCoord[0], splitCoord[1])
        resetCoordsOption();
    }

    const addLabelTypeOption = (evt) => {
        evt.preventDefault();
        let temp;
        setLabelsSelected([...labelsSelected, []])
    
        switch(labelTypeSelection) {
            case 'months of the year':
                temp = months.map(label => {
                    return <option key={label} value={label}>{label}</option>
                });
                setLabelsSelected([...labelsSelected, temp]);
                return;
            case 'days of the week':
                temp = weekdays.map(label => {
                    return <option key={label} value={label}>{label}</option>
                });
                setLabelsSelected([...labelsSelected, temp]);
                console.log('weekdays, labelsSelected', labelsSelected);
                return;
            case 'increments':
                temp = increments.map( label => {
                    return <option key={label} value={label}>{label}</option>
                });
                setLabelsSelected([...labelsSelected, temp]);
                console.log('increments, labelsSelected', labelsSelected);
                return;
            default:
                temp = increments.map( label => {
                    return <option key={label} value={label}>{label}</option>
                });
                 setLabelsSelected([...labelsSelected, temp]);
                console.log('default, labelsSelected', temp);
                 console.log('default, labelsSelected', labelsSelected);
                return;
        }    
        
    }   

    const labelTypesOptions = labelTypes.map( labelType => {
        return <option key={labelType} value={labelType}>{labelType}</option>
    });

    /* const labels = labelsSelected.map( label => {
            return <option key={label.label} value={label.value}>{label.value}</option>
    }); */
    
    const coordsOptions = coords.map((coord, index) => {
        return <option key={index} value={coord}>{coord}</option>
    }) 

   /*  console.log('labels wrapped in an option', labels) */
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
                                placeholder="Chart title"
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

               <Form onSubmit={addLabelTypeOption}>
                <Form.Row>          
                    <Form.Group as={Col} xs={6} className="d-flex p-2">
                        <Form.Control
                            as="select"
                            placeholder="Select label type"
                            {...bindLabelTypeSelection}
                        >
                            <option disabled={true} value="">Label type options</option>
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
                            <option disabled={true} value="">X value</option>
                            {labelsSelected}
                        </Form.Control>
                        <Form.Control
                            type="number"
                            style={{width:"42%", marginLeft:"5px", textAlign:"center",border:"1px solid lightgray", borderRadius: "4px"}}
                            custom
                            size="med"
                            placeholder="Y value"
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
                            <option disabled={true} value="">Select coordinate</option>
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