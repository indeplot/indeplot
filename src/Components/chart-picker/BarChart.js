import React from 'react'
import PropTypes from 'prop-types';
import { Bar } from "react-chartjs-2";

export function BarChart(props) {
  function generateGraph() {
    var borderColor = props.theme !== 'light' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
    return {
      labels: props.labels,
      datasets: [
        {
          label: props.title,
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: borderColor,
          text: borderColor,
          borderWidth: 2,
          data: props.data
        }
      ]
    }
  }

  return (
    <Bar data={generateGraph} />)
}


BarChart.propTypes = {
  labels: PropTypes.array,
  title: PropTypes.string,
  data: PropTypes.array,
  options: PropTypes.any
};
