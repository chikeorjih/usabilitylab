import React from "react";
import Participant from "../components/participant";
import ParticipantList from "../data/participants";

const youngParticipants = ParticipantList.youngParticipants.map((person, index) => {
  return <Participant key={index} person={person} />;
});
const medicareParticipants = ParticipantList.medicareParticipants.map((person, index) => {
  return <Participant key={index} person={person} />;
});

export default () => (
  <div>
    <h2>Under 65</h2>
    <div className="participants">
      {youngParticipants}
    </div>
    <h2>Over 65</h2>
    <div className="participants">
      {medicareParticipants}
    </div>
  </div>
);