import React from "react";
import PropTypes from 'prop-types';
import ParticipantList from "../../data/participants";

const participant = (props) => {
    const currentParticipant = props.location.pathname.split('participants/participant/')[1];
console.log(currentParticipant);

    return (
        <div className="participant-page">
        </div>
    );
};
 
export default participant;