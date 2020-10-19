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
        switch (this.props.chartType) {
            case "Bar":
                return <BarChart {...this.props} />
            default:
                return <LineChart {...this.props} />
        }
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
    chartType: PropTypes.string,
    labels: PropTypes.array,
    title: PropTypes.string,
    data: PropTypes.array,
    options: PropTypes.any
};
