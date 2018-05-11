import React from "react";
import PropTypes from 'prop-types';

const BarChart = (props) => {
    const barWidth = `${(props.config.score/props.config.total) * 100}%`;
    const initial = props.config.initial > 0 ? <span className="initial">{props.config.initial}</span> : null;

    return (
        <div className="bar-chart">
            {initial}
            <span className="bar" style={{ width: barWidth, background: props.config.color }}>
                <span className="score">{props.config.score}</span>
            </span>
            <span className="total">{props.config.total}</span>
        </div>
    );
};

BarChart.PropTypes = {
    config: React.PropTypes.shape({
        initial: React.PropTypes.number,
        color: React.PropTypes.string,
        score: React.PropTypes.number,
        total: React.PropTypes.number,
    })
};

 
export default BarChart;