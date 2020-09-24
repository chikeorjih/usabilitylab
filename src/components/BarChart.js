import React from "react";
import PropTypes from 'prop-types';

const BarChart = (props) => {
    const barWidth = `${(props.config.score/props.config.total) * 100}%`;
    const initial = props.config.initial > 0 ? <span className="initial">{props.config.initial}</span> : null;

    return (
        <div className="bar-chart">
            {initial}
            <span className="bar" style={{ width: barWidth, background: props.config.color }}>
                <span className="score" style={{ background: props.config.color }}>
                    <span className="caret"  style={{ 'border-top-color': props.config.color }}></span>
                    {props.config.score}
                </span>
            </span>
            <span className="total">{props.config.total}</span>
        </div>
    );
};

BarChart.propTypes = {
    config: PropTypes.shape({
        initial: PropTypes.number,
        color: PropTypes.string,
        score: PropTypes.number,
        total: PropTypes.number,
    })
};

 
export default BarChart;