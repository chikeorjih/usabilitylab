import React from "react";
import ParticipantList from "../data/participant-list";
import BarChart from "../components/BarChart";
import ParticipantTask from "../components/ParticipantTask";
import Video from "../components/Video";
import Link from "gatsby-link";

const participant = (props) => {
    const currentParticipant = ParticipantList.getCurrentParticipant(props.pathContext.url);

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

    const flowImages = currentParticipant.images.map((img,i) => {
        const link = img.url !== null ? <Link to={{ pathname: `../../tasks/${img.url}`}}>{img.label}</Link> : <h4>{img.label}</h4>

        return (
            <div className="flow-image" key={i}>
                {link}
                <img src={img.src} className={img.style}/>
            </div>
        );
    });

    return (
        <div className="participant-page">  
            <div className="details">
                <div className="avatar">
                    <img width="80px" height="80px" src={currentParticipant.img} alt={currentParticipant.name}/>
                </div>
                <div className="info">
                    <h2>{currentParticipant.name}</h2>
                    <span><span className="label">Gender:</span>{currentParticipant.gender}</span>
                    <span><span className="label">Age:</span>{currentParticipant.age}</span>
                    <span><span className="label">Occupation:</span>{currentParticipant.occupation}</span>
                </div>
            </div>
            <div className="company-ratings">
                <h3>Provider Affinity</h3>
                {companyRatings}
            </div>
            <section className="tasks">
                <h3>Tasks</h3>
                {tasks}
            </section>
            <section className="flows">
                <h3>HCP vs. KP User Flow</h3>
                {flowImages}
            </section>
        </div>
    );
};
 
export default participant;