import React from 'react'
import PropTypes from 'prop-types';
import { LineChart } from '../../Components/chart-picker/LineChart';
import { BarChart } from '../../Components/chart-picker/BarChart';

export default class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
        this.chartSelector = this.chartSelector.bind(this)
    }

    chartSelector = () => {

        if (this.props.chartType === "Line") {
            return <LineChart labels={this.props.labels} title={this.props.title} data={this.props.data} theme={this.props.theme} options={{}} />
        }
        if (this.props.chartType === "Bar") {
            return <BarChart labels={this.props.labels} title={this.props.title} data={this.props.data} theme={this.props.theme} options={{}} />
        }
        return <LineChart labels={this.props.labels} title={this.props.title} data={this.props.data} theme={this.props.theme} options={{}} />
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
