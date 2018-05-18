import React from "react";
import PropTypes from 'prop-types';
import Link from "gatsby-link";

import happyFace from "../assets/happy-face.svg";
import sadFace from "../assets/sad-face.svg";
import mehFace from "../assets/meh-face.svg";
import xIcon from "../assets/x.svg";
import checkIcon from "../assets/check.svg";

const ParticipantTask = (props) => {
    const completed = props.task.completed ? <img src={checkIcon}/>: <img src={xIcon}/>;
    const seqFace = props.task.seq > 3 ? happyFace : (props.task.seq < 3 ? sadFace : mehFace);
    const confidenceFace = props.task.confidence > 3 ? happyFace : (props.task.confidence < 3 ? sadFace : mehFace);

    const seqColor = props.task.seq > 3 ? '#3b9c50' : (props.task.seq < 3 ? '#bf3f3f' : '#d07c15');
    const confidenceColor= props.task.confidence > 3 ? '#3b9c50' : (props.task.confidence < 3 ? '#bf3f3f' : '#d07c15');

    return (
        <div className="task card" key={props.i}>
            <Link to={`../../tasks/task/${props.task.url}`}>{props.task.task}</Link>
            <span className="completion">
                {completed}
                <span className="label">Task Completed</span>
            </span>
            <span className="seq">
                <img src={seqFace}/>
                <span className="score" style={{color: seqColor}}>{props.task.seq}</span>
                <span className="label">Ease</span>
            </span>
            <span className="confidence">
                <img src={confidenceFace}/>
                <span className="score" style={{color: confidenceColor}}>{props.task.confidence}</span>
                <span className="label">Confidence</span>
            </span>
        </div>
    );
};

export default ParticipantTask;