import React from "react";
import Link from "gatsby-link";
import PropTypes from 'prop-types';

const ParticipantPreview = (props) => {
    return (
        <Link to={{ pathname: `/participants/${props.person.url}`, person: props.person}} className="profile-link">
            <div className="participant">
                <img src={props.person.img} alt="participant1"/>
                <div className="info">
                    <h4>{props.person.name}</h4>
                    <div className="row">
                        <span className="label-row"><span className="label">Gender:</span>{props.person.gender}</span>
                        <span className="label-row"><span className="label">Age:</span>{props.person.age}</span>
                    </div>
                    <span><span className="label">Occupation:</span>{props.person.occupation}</span>
                </div>
            </div>
        </Link>
    );
};

ParticipantPreview.propTypes = {
    person: PropTypes.object
};
 
export default ParticipantPreview;