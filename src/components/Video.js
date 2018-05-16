import React from "react";
import PropTypes from 'prop-types';
import Preview from "../assets/play-preview.svg";

const Video = (props) => {
    const handlePlay = (e) => {
        e.target.play();
    };

    return (
        <div className="video card" key={props.i}>
            <h4>{props.video.title}</h4>
            <video poster={Preview} src={props.video.src} width="400" onClick={handlePlay}controls />
        </div>
    );
};

export default Video;