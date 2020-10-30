import React from 'react'
import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";

export default class LineChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartReference = React.createRef();
    }

    componentDidMount() {
          console.log('Charts: this.chartReference', this.chartReference)
      }

    colorVal = `rgba(${this.props.color.r},${this.props.color.g},${this.props.color.b},${this.props.color.a})`;

    render() {
        console.log('inside LineChart', this.props)
        return ( 
        <Line ref = {(reference) => this.reference = reference} data={this.props.data} options={this.props.options} />
        )

      }
    
  }


LineChart.propTypes = {
  labels: PropTypes.array,
  title: PropTypes.string,
  data: PropTypes.array,
  options: PropTypes.any,
  bgColor: PropTypes.string,
};
