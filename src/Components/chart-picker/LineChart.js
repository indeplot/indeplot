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
        myLineChart.data.labels.push(labelValue);
        myLineChart.data.datasets[0].data.push(dataValue);
        myLineChart.update(); 
    } 

    deleteCoordinate (labelValue, dataValue)  {
        console.log('labelValue, dataValue', labelValue, dataValue);
        const labels = myLineChart.data.labels;
        const data = myLineChart.data.datasets[0].data;
        console.log('indexes where labelValue matches in the labels array', labels.indexOf(labelValue));
        console.log('indexes where dataValue matches in the data array', data.indexOf(dataValue));

     /*  const coordIndex = myLineChart.data.datasets[0].findIndex(item => labels === labelValue && data.value === dataValue);
      console.log('what is coordIndex', coordIndex)
      if (coordIndex > -1) { 
          myLineChart.data.datasets[0].data.splice(coordIndex, 1)
          myLineChart.labels.splice(coordIndex, 1)
         /*  currentChart.config.data.datasets[0].coords.splice(coordIndex, 1) 
          
      }
      myLineChart.update();  */
  
    }




  render() {
    console.log('inside LineChart', this.props)
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
