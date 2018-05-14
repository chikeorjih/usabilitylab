import React from "react";
import Link from "gatsby-link";
import PropTypes from 'prop-types';

const Participant = (props) => {
    return (
        <Link to="/participant" className="profile-link">
            <div className="participant">
                <img src={props.img} alt="participant1"/>
                <div className="info">
                    <h4>Ashley A.</h4>
                    <span><span className="label">Gender:</span><strong>Female</strong></span>
                    <span><span className="label">Age:</span><strong>27</strong></span>
                    <span><span className="label">Occupation:</span><strong>Lifegaurd</strong></span>
                </div>
            </div>
        </Link>
    );
};
 
export default Participant;