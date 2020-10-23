import React from 'react'
import PropTypes from 'prop-types';
import { LineChart } from '../../Components/chart-picker/LineChart';
import { BarChart } from '../../Components/chart-picker/BarChart';
import { PolarChart } from '../../Components/chart-picker/PolarChart';
import { DoughnutChart } from '../../Components/chart-picker/DoughnutChart';
import { PieChart } from '../../Components/chart-picker/PieChart';
import { HorizontalBarChart } from '../../Components/chart-picker/HorizontalBarChart';

export default class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
        this.chartSelector = this.chartSelector.bind(this)
    }

    chartSelector = () => {

        if (this.props.chartType === "Line") {
            return <LineChart labels={this.props.labels} title={this.props.title} data={this.props.data} color={this.props.chartColor} options={{}} />
        }
        if (this.props.chartType === "Bar") {
            return <BarChart labels={this.props.labels} title={this.props.title} data={this.props.data} color={this.props.chartColor} options={{}} />
        }
        if (this.props.chartType === "Polar") {
            return <PolarChart labels={this.props.labels} title={this.props.title} data={this.props.data} color={this.props.chartColor} options={{}} />
        }
        if (this.props.chartType === "Doughnut") {
            return <DoughnutChart labels={this.props.labels} title={this.props.title} data={this.props.data} color={this.props.chartColor} options={{}} />
        }
        if (this.props.chartType === "Pie") {
            return <PieChart labels={this.props.labels} title={this.props.title} data={this.props.data} color={this.props.chartColor} options={{}} />
        }
        if (this.props.chartType === "HorizontalBar") {
            return <HorizontalBarChart labels={this.props.labels} title={this.props.title} data={this.props.data} color={this.props.chartColor} options={{}} />
        }
        return <LineChart labels={this.props.labels} title={this.props.title} data={this.props.data} color={this.props.chartColor} options={{}} />
    }

    render() {
        return (
            <div>
                {this.chartSelector()}
            </div>
        )
    }
}


Charts.propTypes = {
    theme: PropTypes.string,
    chartType: PropTypes.string,
    labels: PropTypes.array,
    title: PropTypes.string,
    data: PropTypes.array,
    options: PropTypes.any
};
