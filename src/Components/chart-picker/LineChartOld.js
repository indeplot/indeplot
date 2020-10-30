import React from 'react'
import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";

export function LineChart(props) {

  function generateGraph() {
    const colorVal = `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`;

    return {
      labels: props.labels,
      datasets: [
        {
          /*label: props.title,*/
          label:props.options.title.text,
          title:"fancy title",
          fill: true,
          lineTension: 0.5,
          backgroundColor: colorVal,
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
         /*  data: props.data.datasets[0].data,
          label: props.options.title.text */
        },
        {
          /*label: props.title,*/
          label:props.options.title.text,
          title:"other line",
          fill: true,
          lineTension: 0.5,
          backgroundColor: colorVal,
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
         /*  data: props.data.datasets[0].data,
          label: props.options.title.text */
        }
      ],
    }
  }

  function generateOptions() {
    
    return {
                responsive: true,
               /*  title: {text: "joanne's title", display: true}, */
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
        
    }
console.log('inside LineChart', props)
  return (
<Line 
  title="missy fancy title"
  data={generateGraph} 
  options={generateOptions}  
 /*  legend={{ display: false }}  */
  />)
  /*   <Line legend={{ display: false }} />) */
}


LineChart.propTypes = {
  labels: PropTypes.array,
  title: PropTypes.string,
  data: PropTypes.array,
  options: PropTypes.any,
  bgColor: PropTypes.string,
};
