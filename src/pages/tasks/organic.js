import React from "react";
import BarChart from "../../components/BarChart";
import ShowHide from "../../components/ShowHide";

import femaleSvg from "../../assets/female.svg";
import maleSvg from "../../assets/male.svg";
import wordCloud from "../../assets/organic-word-cloud.png";

const organic = (props) => {

    return (
        <div>
            <section>
                <h1>Organic Task</h1>
                <ShowHide config={{ trim: 250 }}>
                    <p>Every participant started the usability session showing us how they did (or will) find and apply for health insurance. The majority had employer-sponsored insurance – either through their own employer or that of their spouse.</p>
                    <p>Regardless, we wanted to observe how they will use the Internet to find and evaluate health insurance plans, as well as record whether they will apply based on the plans and information they find.</p>
                    <p>The task always started in a newly-opened browser window (Google Chrome) on the default page (google.com). From there, they were asked to show us what they did (if they are self-insured) – or will do (if they lose their employer coverage).</p>
                    <p>The first theme we recorded was what they did from the start. All participants used either the browser address bar or the Google search box and did a keyword search.</p>
                    <p>Analysis of all the search words and phrases revealed the most common Google search terms to be “Hawaii,” “health,” and “insurance” (see Figure 1, below).</p>
                </ShowHide>
                <h3>Search Terms</h3>
                <img src={wordCloud} alt="word cloud"/>
            </section>
            <section>
                <h4>HMSA Search terms</h4>
                <ShowHide config={{ trim: 120 }}>
                    <p>In their first attempt, two participants (one each day) searched “hmsa” without any other terms.</p>
                    <p>While this only represents about 16% of the usability research participants, it is consistent with Google Analytics of hmsa.com for February – April 2018, where 45% of visitors to hmsa.com come from a Google search of “hmsa”</p>
                </ShowHide>
                <div className="interaction">
                    <span className="number-wrapper">
                        <img src={femaleSvg}/>
                        <img src={femaleSvg}/>
                        <span className="label">Participants</span>
                    </span>
                    <p>Entered "hmsa" as their initial search term</p>
                </div>
            </section>
            <section>
                <h4>KP Search terms</h4>
                <ShowHide config={{ trim: 120 }}>
                    <p>As for Kaiser Permanente, two participants on day 2 searched for “kaiser” or “Kaiser Permanente Hawaii”</p>
                    <p>The latter being one of Google’s recommended search options after they typed “kaiser”.</p>
                </ShowHide>
                <div className="interaction">
                    <span className="number-wrapper">
                        <img src={femaleSvg}/>
                        <img src={maleSvg}/>
                        <span className="label">Participants</span>
                    </span>
                    <p>Entered "kaiser" or "Kaiser Permanente Hawaii" as their initial search term</p>
                </div>
            </section>
            <section>
            <div className="stat-paragraph">
                    <h4>Search Results</h4>
                    <div>
                        <span className="stat">63.6<span className="sub">%</span></span>
                        <p>For <strong>14</strong> of <strong>22</strong> Google searches, participants clicked an organic search result (i.e.; did not click a search ad result), stating that they skip anything that looks like an ad.</p>
                    </div>
                    <div>
                        <span className="stat">25<span className="sub">%</span></span>
                        <p><strong>3</strong> of <strong>12</strong> participants chose to click an HMSA organic search result. The two that were clicked were:</p>
                    </div>
                    <ol className="indent">
                        <li><a href="https://hmsa.com/health-plans/">https://hmsa.com/health-plans/</a></li>
                        <li><a href="https://hmsa.com/health-plans/individuals-families/">https://hmsa.com/health-plans/individuals-families/</a></li>
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default organic;