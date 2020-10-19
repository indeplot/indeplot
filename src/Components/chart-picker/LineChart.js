import React from 'react'
import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";

export function LineChart(props) {
  function generateGraph() {
    var borderColor = props.theme !== 'light' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
    return {
      labels: props.labels,
      datasets: [
        {
          label: props.title,
          fill: true,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: borderColor,
          borderWidth: 2,
          data: props.data
        }
      ]
    }
  }

  return (
    <Line data={generateGraph} />)
}


LineChart.propTypes = {
  labels: PropTypes.array,
  title: PropTypes.string,
  data: PropTypes.array,
  options: PropTypes.any
};
