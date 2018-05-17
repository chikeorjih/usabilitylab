import React from "react";
import BarChart from "../../components/BarChart";

export default () => (
    <div>
        <h1>HMSA Path To Application</h1>
        <p>In this task we observed how Hawaiian residents and consumers find, study, and select a health insurance plan for themselves (and family, if applicable) on HMSA.com.</p>
        <section>
            <div className="stat-paragraph">
                <h3>Task Completion Rate</h3>
                <div>
                    <span className="stat">8<span className="sub">%</span></span>
                    <p>This is the percentage of participants who completed the task goal. </p>
                </div>
            </div>
            <h4>Completion Breakdown</h4>
            <div className="bar-wrapper">
                <span>Success</span>
                <span className="chart-wrapper">
                    <BarChart config={{initial: 0, score: 1, total: 12, color: "#75de8b"}}/>
                </span>
            </div>
            <div className="bar-wrapper">
                <span>1 Assist</span>
                <span className="chart-wrapper">
                    <BarChart config={{initial: 0, score: 2, total: 12, color: "#ff9108"}}/>
                </span>
            </div>
            <div className="bar-wrapper">
                <span>2 Assits</span>
                <span className="chart-wrapper">
                    <BarChart config={{initial: 0, score: 1, total: 12, color: "#ff9108"}}/>
                </span>
            </div>
            <div className="bar-wrapper">
                <span>Abandoned</span>
                <span className="chart-wrapper">
                    <BarChart config={{initial: 0, score: 8, total: 12, color: "#f76161"}}/>
                </span>
            </div>
        </section>
        <section>
            <div className="seq-confidence">
                <div className="seq">
                    <h4>Ease(SEQ) Average/<span>Adjusted Average</span></h4>
                    <span>3.5</span>
                    <span>1.5</span>
                </div>
                <div className="confidence">
                    <h4>Confidence Average<span>Adjusted Average</span></h4>
                    <span>3.5</span>
                    <span>1.5</span>
                </div>
            </div>
        </section>
    </div>
);