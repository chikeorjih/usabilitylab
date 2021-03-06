import React from "react";
import BarChart from "../components/BarChart";
import TaskList from "../data/task-list";
import ShowHide from "../components/ShowHide";

import femalePng from "../assets/woman.png";
import malePng from "../assets/man.png";

const task = (props) => {
    const currentTask = TaskList.getCurrentTask(props.pathContext.url) || TaskList.getShape();
    
    const getParticipants = (participants) => {
        return (
            participants.map((participant, i) => {
                return <img src={participant === 'female'? femalePng : malePng} key={i}/>;
            })
        );
    };

    const getScoreColor = (score) => {
        return score > 3 ? '#75de8b' : (score < 3 ? '#f76161' : '#ff9108');
    };

    const completionBreakdown = currentTask.completionBreakdown.map((item,i) => {
        const color = item.label === "Success" ? '#75de8b' : (item.label === "Abandoned" ? '#f76161' : '#ff9108')

        return (
            <div className="bar-wrapper" key={i}>
                <span>{item.label}</span>
                <span className="chart-wrapper">
                    <BarChart config={{initial: 0, score: item.score, total: currentTask.completionTotalParticipants, color}}/>
                </span>
            </div>
        );
    });

    const usabilityIssues = currentTask.issues.map((issue,i) => {
        const color = issue.severity === "Low" ? '#089225' : (issue.severity === "High" ? '#9a1414' : '#b38229');
        const bkg = issue.severity === "Low" ? '#c8f1d3' : (issue.severity === "High" ? '#ffc6c6' : '#ffebc7');

        return (
            <div className="issue" key={i}>
                <span className='theme'>{issue.theme}</span>
                <span className="count-wrapper">
                    <span className="count">{getParticipants(issue.participants)}</span>
                    <span className="label">Participants</span>
                </span>
                <span className="severity-wrapper">
                    <span className="severity" style={{background: bkg, color: color}}>{issue.severity}</span>
                    <span className="label">Severity</span>
                </span>
            </div>
        );
    });

    const analysis = currentTask.analysis.map((paragraph,i) => {
        return (
            <p key={i}>{paragraph}</p>
        );
    });

    const recommendations = currentTask.recommendations.map((rec, i) => {
        return (
            <div className="recommendations" key={i}>
                {rec.description !== null ? <p>{rec.description}</p> : null}
                {rec.file !== null ? <a href={rec.file}>{rec.fileName}</a> : null}
            </div>
        );
    });

    const recommendationSection = currentTask.recommendations.length > 0 ? 
    <section>
        <h3>Recommendations</h3>
        {recommendations}
    </section> : null;

    return (
        <div>
            <h1>{currentTask.name}</h1>
            <p>{currentTask.description}</p>
            <section className="borderless">
                <div className="stat-paragraph">
                    <h3>Task Completion Rate</h3>
                    <div className="completion-rate">
                        <span className="stat">{currentTask.completionRate}<span className="sub">%</span></span>
                        <p><strong>{currentTask.completionBreakdown[0].score}</strong> out <strong>{currentTask.completionTotalParticipants}</strong> participants successfully completed the task without any training or assistance.</p>
                    </div>
                </div>
                <h4 className="completion-breakdown">Completion Breakdown</h4>
                {completionBreakdown}
            </section>
            <section>
                <ShowHide config={{ trim: 160 }}>
                    <p>After each task, the participant is asked two questions: How easy was the task (SEQ) and how confident were you that you completed the task. Since very few people people completed the task, we asked how confident that they were on the right path to completing the task.</p>
                    <p>Since participants had a tendency to overrate their experience, we included an adjusted score. This score is calulated by subtracing 1 to remove a neutral score of 3 and counting an abandoned or failed task as 0.</p>
                </ShowHide>
                <div className="flex">
                    <div className="seq-confidence">
                        <div className="seq">
                            <h4>Ease(SEQ) Average</h4>
                            <span style={{color: getScoreColor(currentTask.easeAverage && currentTask.easeAverage.score)}}>{currentTask.easeAverage && currentTask.easeAverage.score} <span className="denominator">/5</span></span>
                        </div>
                        <div className="seq">
                            <h4>Ease(SEQ) Adjusted Average</h4>
                            <span style={{color: getScoreColor(currentTask.easeAverage && currentTask.easeAverage.adjusted)}}>{currentTask.easeAverage && currentTask.easeAverage.adjusted} <span className="denominator">/5</span></span>
                        </div>
                    </div>
                    <div className="seq-confidence">
                    <div className="confidence">
                            <h4>Confidence Average</h4>
                            <span style={{color: getScoreColor(currentTask.confidenceAverage && currentTask.confidenceAverage.score)}}>{currentTask.confidenceAverage  && currentTask.confidenceAverage.score} <span className="denominator">/4</span></span>
                        </div>
                        <div className="confidence">
                            <h4>Confidence Adjusted Average</h4>
                            <span style={{color: getScoreColor(currentTask.confidenceAverage && currentTask.confidenceAverage.adjusted)}}>{currentTask.confidenceAverage && currentTask.confidenceAverage.adjusted} <span className="denominator">/4</span></span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h3>First Interaction</h3>
                <div className="interaction">
                    <span className="number-wrapper">
                        <span className="count">{getParticipants(currentTask.firstInteraction.participants)}</span>
                        <span className="label">Participants</span>
                    </span>
                    <p>{currentTask.firstInteraction.interaction}</p>
                </div>
            </section>
            <section>
                <h3>Usability Issues</h3>
                <ShowHide config={{ trim: 160 }}>
                    <p>The team facilitating the lab captured all the significant usability issues each participant encountered. Each issue was given a sevirity rating.</p>
                    <p> A <strong>High</strong> rating indicates the participant likely abandoned the task after ecountering the issue</p>
                    <p> A <strong>Medium</strong> rating indicates the participant noticed the issue but was able to proceed</p>
                    <p> A <strong>Low</strong> rating indicates the participant may have not noticed the issue but the team facilitating the lab noticed an issue</p>
                </ShowHide>
                {usabilityIssues}
            </section>
            <section>
                <h3>Analysis</h3>
                <ShowHide config={{trim: 250}}>
                    {analysis}
                </ShowHide>
            </section>
            {recommendationSection}
        </div>
    );
};

export default task;