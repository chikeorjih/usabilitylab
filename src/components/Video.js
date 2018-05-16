import React from "react";
import PropTypes from 'prop-types';

const Video = (props) => {

    return (
        <div className="video card" key={props.i}>
            <video src={props.src} width="400" controls />
        </div>
    );
};

export default Video;