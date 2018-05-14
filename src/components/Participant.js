import React from "react";
import PropTypes from 'prop-types';

const Participant = (props) => {
    return (
        <div className="participant">
            <img src={props.img} alt="participant1"/>
            <div>
                <h4>Geordi L.</h4>
                <span>Age: <strong>24</strong></span>
            </div>
        </div>
    );
};
 
export default Participant;