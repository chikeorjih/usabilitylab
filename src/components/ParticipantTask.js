import React from "react";
import PropTypes from 'prop-types';
import happyface from "../assets/happy-face.svg";

const ParticipantTask = (props) => {

    return (
        <div className="task card" key={props.i}>
            <h4>{props.task.task}</h4>
            <span className="completion">
                <span>{props.task.completed}</span>
                <span className="label">Task Completed</span>
            </span>
            <span className="seq">
                <span className="face">
                    <span>{props.task.seq}</span>
                    <img src={happyface}/>
                </span>
                <span className="label">Ease</span>
            </span>
            <span className="confidence">
                <span className="face">
                    <span>{props.task.confidence}</span>
                    <img src={happyface}/>
                </span>
                <span className="label">Confidence</span>
            </span>
        </div>
    );
};

export default ParticipantTask;