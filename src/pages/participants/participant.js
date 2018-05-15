import React from "react";
import ParticipantList from "../../data/participant-list";
import BarChart from "../../components/BarChart";
import ParticipantTask from "../../components/ParticipantTask";

const participant = (props) => {
    const currentParticipantName = props.location.pathname.split('participants/participant/')[1];
    const currentParticipant = ParticipantList.getCurrentParticipant(currentParticipantName);

    const companyRatings = currentParticipant.providers.map((x,i) => {
        const color = x.score > 3 ? '#75de8b' : (x.score < 3 ? '#f76161' : '#ff9108');
        return (
            <div className="bar-wrapper" key={i}>
                <span className="label">{x.name}</span>
                <span className="chart-wrapper"><BarChart config={{initial: 0, score: x.score, total: 5, color: color}}/></span>
            </div>
        );
    });

    const tasks = currentParticipant.tasks.map((task,i) => {
        return <ParticipantTask task={task} key={i}/>;
    });

    return (
        <div className="participant-page">  
            <div className="details">
                <div className="avatar">
                    <img width="80px" height="80px" src={currentParticipant.img} alt={currentParticipant.name}/>
                </div>
                <div className="info">
                    <h2>{currentParticipant.name}</h2>
                    <span><span className="label">Gender:</span><strong>{currentParticipant.gender}</strong></span>
                    <span><span className="label">Age:</span><strong>{currentParticipant.age}</strong></span>
                    <span><span className="label">Occupation:</span><strong>{currentParticipant.occupation}</strong></span>
                </div>
            </div>
            <div className="company-ratings">
                <h3>Provider Affinity</h3>
                {companyRatings}
            </div>
            <div className="tasks">
                <h3>Tasks</h3>
                {tasks}
            </div>
        </div>
    );
};
 
export default participant;