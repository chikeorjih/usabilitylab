import React from "react";
import Link from "gatsby-link";
import Participant from "../components/participant";
import participantData from "../data/participants";

const youngParticipantData = participantData.filter(person => person.age < 65);
const youngParticipants = youngParticipantData.map((person, index) => {
  return <Participant key={index} person={person} />;
});

const medicareParticipantData = participantData.filter(person => person.age >= 65);
const medicareParticipants = medicareParticipantData.map((person, index) => {
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