import React from "react";
import BarChart from "../../components/BarChart";
import TaskList from "../../data/task-list";

const task = (props) => {
    const currentTaskName = props.location.pathname.split('tasks/task/')[1];
    const currentTask = TaskList.getCurrentTask(currentTaskName);

    const completionBreakdown = currentTask.completionBreakdown.map((item,i) => {
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

    return (
        <div>
            <h1>{currentTask.name}</h1>
            <p>{currentTask.summary}</p>
            <section>
                <div className="stat-paragraph">
                    <h3>Task Completion Rate</h3>
                    <div>
                        <span className="stat">{currentTask.completionRate}<span className="sub">%</span></span>
                        <p>This is the percentage of participants who completed the task goal. </p>
                    </div>
                </div>
                <h4>Completion Breakdown</h4>
                {completionBreakdown}
            </section>
            <section>
                <div className="seq-confidence">
                    <div className="seq">
                        <h4>Ease(SEQ) Average<span>/Adjusted Average</span></h4>
                        <span>{currentTask.easeAverage.score}</span>
                        <span className="adjusted">/ {currentTask.easeAverage.adjusted}</span>
                    </div>
                    <div className="confidence">
                        <h4>Confidence Average<span>/Adjusted Average</span></h4>
                        <span>{currentTask.confidenceAverage.score}</span>
                        <span className="adjusted">/ {currentTask.confidenceAverage.adjusted}</span>
                    </div>
                </div>
            </section>
            <section>
                <h3>First Interaction</h3>
                <div className="first-interaction">
                    <span className="number-wrapper">
                        <span className="number">{currentTask.firstInteraction.participants}</span>
                        <span>Participants</span>
                    </span>
                    <p>{currentTask.firstInteraction.interaction}</p>
                </div>
            </section>
        </div>
    );
};

export default task;