import React from 'react'
import { Chart } from "react-chartjs-2";
import CoordinateInput from '../CoordinateInput';

let myLineChart;

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.state = { 
            data:[],
            labels:[],
            title: "",
            label: ""
        }
        this.addCoordToState = this.addCoordToState.bind(this);
        this.addTitleToState = this.addTitleToState.bind(this);
        this.addTrackingLabelToState = this.addTrackingLabelToState.bind(this);
        this.deleteCoordinate = this.deleteCoordinate.bind(this);
         
    }
    

    componentDidMount() {
        let colorVal = `rgba(${this.props.color.r},${this.props.color.g},${this.props.color.b},${this.props.color.a}`;
        this.buildChart(colorVal);
    }

    componentDidUpdate() { 
        let colorVal = `rgba(${this.props.color.r},${this.props.color.g},${this.props.color.b},${this.props.color.a}`;
        this.buildChart(colorVal); 
    } 

    buildChart = (colorVal) => {
        const myChartRef = this.chartRef.current.getContext("2d");
        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: this.state.labels,
                datasets: [
                        {
                        label: this.state.label,
                        data: this.state.data,
                        fill: true,
                        backgroundColor: colorVal,
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                    }
                ]
            },
            options: {
                responsive: true,
                title: {text: this.state.title, display: true}, 
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                autoSkip: false,
                                maxTicksLimit: 10,
                                beginAtZero: true
                            },
                            gridLines: {
                                display:false
                            }
                        }
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display:false
                            }
                        }
                    ]
                }

            }
        }); 
    }

    addTitleToState(chartTitle)  {
        this.setState({title: chartTitle});
       
    }
     addTrackingLabelToState(trackingLabel)  {
        this.setState({label:trackingLabel})
       
    }


    addCoordToState(labelElement, dataElement) {
        this.setState(prevState => ({
            labels: [...prevState.labels, labelElement]
        }));
        this.setState(prevState => ({
            data: [...prevState.data, dataElement]
        }));
    }


    deleteCoordinate (labelValue, dataValue)  {
        let tempLabelIndexAry = this.state.labels.map((e,i) => e ===labelValue ? i: undefined).filter(x => x);

        let tempDataIndexAry = this.state.data.map((e,i) => e === dataValue ? i: undefined).filter(x => x);


        const found = tempLabelIndexAry.filter(v => tempDataIndexAry.indexOf(v) !== -1)

        if (found > -1 -1 ) { 
            this.state.labels.splice(found, 1)  
            this.state.data.splice(found, 1)
        }
        myLineChart.update();  

    }




  render() {  

    return (
      <div>
        <canvas id="myChart" ref={this.chartRef}  />
        <div>
              <CoordinateInput 
                  addTitleToState = {this.addTitleToState}
                  addTrackingLabelToState = {this.addTrackingLabelToState}
                  addCoordToState = {this.addCoordToState}
                  deleteCoordinate = {this.deleteCoordinate}
              />
          </div>
        </div>
        )
    }

  }
