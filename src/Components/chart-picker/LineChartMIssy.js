import React from 'react'
import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";
import CoordinateInput from '../../Components/CoordinateInput';

export default class LineChart extends React.Component {
      constructor(props) {
        super(props)
        this.chartReference = React.createRef();
        this.state = {
            chartData: {
                labels: ["june", "july", "may"],
                datasets: [
                    {
                        label: 'Label:  tracking rainfall',
                        data: [10, 30, 50],
                        coords:[],
                        labelOptions: ["may", "june", "july", "aug"],
                        backgroundColor: props.chartColor,
                      borderWidth: 4
                     }
                ],
            },
            options: {
                legend: { position: "bottom"},
                responsive: true,
                title: {text: "title:of the whole chart", display: true},
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                autoSkip: true,
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
                            beginAtZero: true,
                            ticks: {
                                autoSkip:false
                            },
                            gridLines: {
                                display:false
                            }
                        }
                    ]
                }

            } 
        }
  }

  componentDidMount() {
    
    console.log('LineChart: componentDidMount, this.chartReference', this.chartReference);
      
    
  }

  var chart = new Chart('chart-0', {
			type: 'line',
			data: data,
			options: options
		});



  addTitleTracking(chartTitle, tracking)  {
        let currentChart = this.reference.chartReference
        currentChart.options.title.text = chartTitle
        currentChart.config.data.datasets[0].label = tracking
        currentChart.update(); 
    }

    
  addLabelValue (optionVal) {
        let chart = this.state.chartData;

        chart.datasets.forEach((dataset) => {
            dataset.labelOptions.push(optionVal);
        });

    }


  addCoordinate(labelValue, dataValue) {
        let chart = this.state.chartData;

        chart.labels.push(labelValue);
        chart.datasets.forEach((dataset) => {
            dataset.data.push(dataValue);
        });
        /* let coord = {
            label:labelValue,
            data:dataValue 
        }
        /* update coords to include new pair of coordinates 
       chart.datasets.forEach((dataset) => {
            dataset.coords.push(coord);
        });
 */
        let currentChart = this.reference.chartReference
        currentChart.update(); 
    }

  deleteCoordinate (labelValue, dataValue)  {
      let currentChart = this.reference.chartReference
      let chart = this.state.chartData;
      var dtaTmp = currentChart.config.data.datasets[0].coords
      const coordIndex = dtaTmp.findIndex(coord => coord.label === labelValue && coord.data === dataValue);
      
      if (coordIndex > -1) { 
          currentChart.config.data.datasets[0].data.splice(coordIndex, 1)
          chart.labels.splice(coordIndex, 1)
          currentChart.config.data.datasets[0].coords.splice(coordIndex, 1)
          
      }
      currentChart.update(); 
  
    }

 /*  const colorVal = `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`; */
  /* updateBackgroundColor(color) {
        console.log('backgroundColor before update', this.state.chartData.datasets.backgroundColor);

              let currentChart = this.reference.chartInstance

        const colorVal = `rgba(${color.r},${color.g},${color.b},${color.a})`;
        console.log('inside updateBackroundColor:colorVal', colorVal);
        this.setState({
            dataset: {
            ...this.state.chartData.dataset,
            backgroundColor: colorVal 
            }
        });
        console.log('backgroundColor', this.state.chartData.datasets.backgroundColor);
        currentChart.update();
    } */

  render() {
    console.log('inside LineChart', this.props)
    return (
      <div>
        <Line ref={this.chartReference} data={this.state.chartData} options={this.state.options}  />
        <div>
              <CoordinateInput 
                  addTitleTracking = {this.addTitleTracking}
                  addCoordinate = {this.addCoordinate}
                  deleteCoordinate = {this.deleteCoordinate}
                  addLabelValue = {this.addLabelValue}
                  label = {this.state.chartData.datasets[0].label}
                  title = {this.state.options.title.text}
                  data = {this.state.chartData.datasets[0].data}
                  labels={this.state.chartData.labels}
                  coords={this.state.chartData.datasets[0].coords}
                  labelOptions = {this.state.chartData.datasets[0].labelOptions} 
              />
          </div>
        </div>
        )
    }

  }
