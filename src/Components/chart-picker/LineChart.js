import React from 'react'
import { Chart } from "react-chartjs-2";
import CoordinateInput from '../CoordinateInput';

let myLineChart;

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
    

    componentDidMount() {
        this.buildChart();
    }

    componenDidUpdate() {
        this.buildChart();
        
    }

  buildChart = () => {
      const myChartRef = this.chartRef.current.getContext("2d");
      console.log('what is chartRef', myChartRef);
      /* const { data, labels } = this.props; */

      if (typeof myLineChart !== "undefined") myLineChart.destroy();

      myLineChart = new Chart(myChartRef, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                    {
                    label: '',
                    data: [],
                    fill: false,
                    backgroundColor: '#6610f2'
                }
            ]
        },
        options: {
            responsive: true,
            title: {text: "", display: true}, 
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

    addTitleTracking(chartTitle, tracking)  {
        myLineChart.options.title.text = chartTitle
        myLineChart.data.datasets[0].label = tracking
        myLineChart.update(); 
    }

    addLabelValue (optionVal) {
        myLineChart.data.datasets[0].labelOptions.push(optionVal)
        myLineChart.update();
    }

   addCoordinate(labelValue, dataValue) {
       dataValue = parseInt(dataValue)
        myLineChart.data.labels.push(labelValue);
        myLineChart.data.datasets[0].data.push(dataValue);
        myLineChart.update();
    } 

    deleteCoordinate (labelValue, dataValue)  {
        let aryLabels =  myLineChart.data.labels

        let tempLabelIndexAry = aryLabels.map((e,i) => e ===labelValue ? i: undefined).filter(x => x);
        console.log('tempLabelIndexAry',tempLabelIndexAry);
        /* let labelIndex = aryLabels.indexOf( labelValue ) */

        let aryData =  myLineChart.data.datasets[0].data
        let tempDataIndexAry = aryData.map((e,i) => e === dataValue ? i: undefined).filter(x => x);
        console.log('tempDataIndexAry',tempDataIndexAry);

        const found = tempLabelIndexAry.filter(v => tempDataIndexAry.indexOf(v) !== -1)
        console.log('found', found);

      if (found > -1 -1 ) { 
          aryLabels.splice(found, 1)  
          aryData.splice(found, 1)
      }
      myLineChart.update();  
  
    }




  render() {
    
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef}  />
        <div>
              <CoordinateInput 
                  addTitleTracking = {this.addTitleTracking}
                  addCoordinate = {this.addCoordinate}
                  deleteCoordinate = {this.deleteCoordinate}
                 /*  addLabelValue = {this.addLabelValue} */
                 /*  label = {myLineChart.data.datasets[0].label} */
                /*   title = {myLineChart.options.title.text} */
                 /* data = {this.state.chartData.datasets[0].data}
                  labels={this.state.chartData.labels}
                  coords={this.state.chartData.datasets[0].coords}
                  labelOptions = {this.state.chartData.datasets[0].labelOptions}  */
              />
          </div>
        </div>
        )
    }

  }
