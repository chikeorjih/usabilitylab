import React from "react";
import BarChart from "../../components/BarChart";
import TaskList from "../../data/task-list";

import femaleSvg from "../../assets/female.svg";
import maleSvg from "../../assets/male.svg";

const task = (props) => {
    const currentTaskName = props.location.pathname.split('tasks/task/')[1];
    const currentTask = TaskList.getCurrentTask(currentTaskName) || {};
    
    const getParticipants = (participants) => {
        return (
            participants && participants.map((participant, i) => {
                return <img src={participant === 'female'? femaleSvg : maleSvg} key={i}/>;
            })
        );
    };

    const getScoreColor = (score) => {
        return score > 3 ? '#75de8b' : (score < 3 ? '#f76161' : '#ff9108');
    };

    const completionBreakdown = currentTask.completionBreakdown && currentTask.completionBreakdown.map((item,i) => {
        const color = item.label === "Success" ? '#75de8b' : (item.label === "Abandoned" ? '#f76161' : '#ff9108')

        return (
            <div className="bar-wrapper" key={i}>
                <span>{item.label}</span>
                <span className="chart-wrapper">
                    <BarChart config={{initial: 0, score: item.score, total: 12, color}}/>
                </span>
            </div>
        );
    });

    const usabilityIssues = currentTask.issues && currentTask.issues.map((issue,i) => {
        const color = issue.severity === "Low" ? '#75de8b' : (issue.severity === "High" ? '#f76161' : '#e6b458')

        return (
            <div className="issue" key={i}>
                <span className='theme'>{issue.theme}</span>
                <span className="count-wrapper">
                    <span className="count">{getParticipants(issue.participants)}</span>
                    <span className="label">Participants</span>
                </span>
                <span className="severity-wrapper">
                    <span className="severity" style={{background: color}}>{issue.severity}</span>
                    <span className="label">Severity</span>
                </span>
            </div>
        );
    });

    return (
        <div>
            <h1>{currentTask.name}</h1>
            <p>{currentTask.summary}</p>
            <section>
                <div className="stat-paragraph">
                    <h3>Task Completion Rate</h3>
                    <div>
                        <span className="stat">{currentTask.completionRate}<span className="sub">%</span></span>
                        <p><strong>{Array.isArray(currentTask.completionBreakdown) && currentTask.completionBreakdown[0].score}</strong> out <strong>12</strong> participants successfully completed the task without any training or assistance.</p>
                    </div>
                </div>
                <h4>Completion Breakdown</h4>
                {completionBreakdown}
            </section>
            <section>
                <div className="seq-confidence">
                    <div className="seq">
                        <h4>Ease(SEQ) Average<span>/Adjusted Average</span></h4>
                        <span style={{color: getScoreColor(currentTask.easeAverage && currentTask.easeAverage.score)}}>{currentTask.easeAverage && currentTask.easeAverage.score}</span>
                        <span className="adjusted">/{currentTask.easeAverage && currentTask.easeAverage.adjusted}</span>
                    </div>
                    <div className="confidence">
                        <h4>Confidence Average<span>/Adjusted Average</span></h4>
                        <span style={{color: getScoreColor(currentTask.confidenceAverage && currentTask.confidenceAverage.score)}}>{currentTask.confidenceAverage && currentTask.confidenceAverage.score}</span>
                        <span className="adjusted">/{currentTask.confidenceAverage && currentTask.confidenceAverage.adjusted}</span>
                    </div>
                </div>
            </section>
            <section>
                <h3>First Interaction</h3>
                <div className="interaction">
                    <span className="number-wrapper">
                        <span className="count">{getParticipants(currentTask.firstInteraction && currentTask.firstInteraction.participants)}</span>
                        <span className="label">Participants</span>
                    </span>
                    <p>{currentTask.firstInteraction && currentTask.firstInteraction.interaction}</p>
                </div>
            </section>
            <section>
                <h3>Usability Issues</h3>
                {usabilityIssues}
            </section>
        </div>
    );
};

export default task;