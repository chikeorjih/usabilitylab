import React from "react";
import Link from "gatsby-link";
import PropTypes from 'prop-types';

const Participant = (props) => {
    return (
        <Link to={{ pathname: `participant/${props.person.url}`, person: props.person}} className="profile-link">
            <div className="participant">
                <img src={props.person.img} alt="participant1"/>
                <div className="info">
                    <h4>{props.person.name}</h4>
                    <span><span className="label">Gender:</span><strong>{props.person.gender}</strong></span>
                    <span><span className="label">Age:</span><strong>{props.person.age}</strong></span>
                    <span><span className="label">Occupation:</span><strong>{props.person.occupation}</strong></span>
                </div>
            </div>
        </Link>
    );
};

Participant.PropTypes = {
    person: React.PropTypes.object
};
 
export default Participant;