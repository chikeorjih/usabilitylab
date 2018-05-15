import React from "react";
import ParticipantPreview from "../components/ParticipantPreview";
import ParticipantList from "../data/participant-list";

const youngParticipants = ParticipantList.youngParticipants.map((person, index) => {
  return <ParticipantPreview key={index} person={person} />;
});
const medicareParticipants = ParticipantList.medicareParticipants.map((person, index) => {
  return <ParticipantPreview key={index} person={person} />;
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