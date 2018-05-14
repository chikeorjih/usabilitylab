import React from "react";
import Participant from "../components/Participant";

import participant1 from "../assets/participants/participant1.jpg";

export default () => (
  <div>
    <h2>Under 65</h2>
    <div className="participants">
      <Participant img={participant1}/>
      <Participant img={participant1}/>
    </div>
    <h2>Over 65</h2>
    <p>
    </p>
  </div>
);