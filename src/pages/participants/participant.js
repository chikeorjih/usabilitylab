import React from "react";
import PropTypes from 'prop-types';
import ParticipantList from "../../data/participants";

const participant = (props) => {
    const currentParticipantName = props.location.pathname.split('participants/participant/')[1];
    const currentParticipant = ParticipantList.getCurrentParticipant(currentParticipantName);

    return (
        <div className="participant-page">  
            <div className="details">
                <div className="avatar">
                    <img src={currentParticipant.img} alt={currentParticipant.name}/>
                </div>
                <div className="info">
                    <h2>{currentParticipant.name}</h2>
                    <span><span className="label">Gender:</span><strong>{currentParticipant.gender}</strong></span>
                    <span><span className="label">Age:</span><strong>{currentParticipant.age}</strong></span>
                    <span><span className="label">Occupation:</span><strong>{currentParticipant.occupation}</strong></span>
                </div>
            </div>
        </div>
    );
};
 
export default participant;