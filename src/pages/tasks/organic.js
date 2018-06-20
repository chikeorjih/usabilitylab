import React from "react";
import ShowHide from "../../components/ShowHide";

import femaleSvg from "../../assets/female.svg";
import maleSvg from "../../assets/male.svg";
import wordCloud from "../../assets/organic-word-cloud.png";

const organic = (props) => {

    return (
        <div>
            <h1>Organic Task</h1>
            <ShowHide config={{ trim: 250 }}>
                <p>Every participant started the usability session showing us how they did (or will) find and apply for health insurance. The majority had employer-sponsored insurance – either through their own employer or that of their spouse.</p>
                <p>Regardless, we wanted to observe how they will use the Internet to find and evaluate health insurance plans, as well as record whether they will apply based on the plans and information they find.</p>
                <p>The task always started in a newly-opened browser window (Google Chrome) on the default page (google.com). From there, they were asked to show us what they did (if they are self-insured) – or will do (if they lose their employer coverage).</p>
                <p>The first theme we recorded was what they did from the start. All participants used either the browser address bar or the Google search box and did a keyword search.</p>
                <p>Analysis of all the search words and phrases revealed the most common Google search terms to be “Hawaii,” “health,” and “insurance” (see word cloud, below).</p>
            </ShowHide>
            <h3>Search Terms</h3>
            <img src={wordCloud} alt="word cloud"/>
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
                        <span className="stat">25.0<span className="sub">%</span></span>
                        <p><strong>3</strong> of <strong>12</strong> participants chose to click an HMSA organic search result.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="stat-paragraph">
                    <h4>HMSA Path to application</h4>
                    <div>
                        <span className="stat">63.6<span className="sub">%</span></span>
                        <p><strong>7</strong> of the <strong>11</strong> who started the path to application (enrollment) on an HMSA.com Web page navigated to the plan comparison chart for individuals and families or 2018 Medicare Advantage plans.</p>
                    </div>
                </div>
                <ShowHide config={{ trim: 220 }}>
                    <p>When participants reflected on the ease in finding and comparing HMSA health plans, those under 65 years rated it “easy to very easy”, and those 65 and older rated it “easy”. Both groups stated they were “confident” that they were on the right path to finding and applying for health insurance on HMSA.com.</p>
                    <p>That said, of the 7 who immediately navigated to the plan comparison page, only 3 (1 the first day and 2 the second) clicked to enroll online or download the application without any prompting or assistance from the moderator. When we looked at the overall ease and confidence rating from these three participants, those over 65 rated the ease of finding and applying for a Medicare Akamai Advantage plan on HMSA easier and were more confident than those under 65.</p>
                </ShowHide>
            </section>
            <section>
                <div className="stat-paragraph">
                    <h4>Kaiser Permanente Path to application</h4>
                    <div>
                        <span className="stat">72.7<span className="sub">%</span></span>
                        <p><strong>8</strong> of the <strong>11</strong> navigated to the shop plans page</p>
                    </div>
                </div>
                <ShowHide config={{ trim: 120 }}>
                    <p>On kpinhawaii.com, those under 65 years found the task slightly less easy than on HMSA.com, but were more confident they were on the right path to finding and applying for a plan. For the participants 65 years and older, they rated finding plans as difficult and were not as confident they were in the right place as they felt on HMSA.com.</p>
                    <p>Of the 7 who navigated to the plan comparison or detail pages, two (1 each day) clicked the “apply” button from one of the plan details page. For kpinhawaii.com, participants under 65 years perceived the ease in finding a plan and deciding to enroll slightly easier and were more confident on average than the participants 65 years and older. In fact, 2 of the 6 participants in the latter group never did find and compare Kaiser Permanente’s Medicare Advantage plans. They only explored the individual and family plans.</p>
                    <p>For reasons we will discuss in greater detail, the number of individual and family plans, and the amount of information and consumer (mis)understanding of key health insurance terms render the task of shopping for and selecting the right health insurance plan for an individual or household very difficult.</p>
                </ShowHide>
            </section>
            <section>
                <h4>HMSA Gym Membership</h4>
                <ShowHide config={{ trim: 120 }}>
                    <p>Three of the 6 participants on day 1 were given the task of finding the gym or fitness center benefits they get with their HMSA health insurance plan. One was able to successfully locate the information, but was unable to determine which fitness centers or gyms she could use. The other two abandoned the task and site before finding the benefit information.</p>
                    <p>One user who abandoned the task did so when faced with the “Active & Fit” program details (PDF). The other participant who abandoned the task, did so on the “Active & Fit” Web page (https://hmsa.com/well-being/active-and-fit/)when she clicked “1. Find your gym discount”, believing it was a link.</p>
                </ShowHide>
                <h4>Kaiser Permanente Gym Membership</h4>
                <ShowHide config={{ trim: 120 }}>
                    <p>Three of the 6 participants on day 1 were given the task of finding the gym or fitness center benefits they get with their Kaiser Permanente health insurance plan. Two were able to successfully locate the information; one abandoned the task and site before finding the benefit information.</p>
                    <p>The user who abandoned the task did so when faced with the wall of text in the 2-page “Kaiser Permanente Fit Rewards Home Fitness Kit Flyer” (PDF). One of the participants who successfully found the gym/fitness center benefit did so using Google search, not the navigation or search on kpinhawaii.com.</p>
                </ShowHide>
            </section>
            <section>
                <h4>HMSA Finding New Primary Physician</h4>
                <ShowHide config={{ trim: 120 }}>
                    <p>Four of the 6 participants on day 2 were given the task of finding a primary physician who accepts their HMSA health insurance plan. Three were successful locating and using the Find a Doctor search and search results; one abandoned the task.</p>
                    <p>The participant who abandoned will not use the HMSA site to find a new doctor. Instead, he will ask his friends and family to refer him to doctors they use and then call to find out what insurance that doctor accepts.</p>
                </ShowHide>
                <h4>Kaiser Permanente Finding New Primary Physician</h4>
                <ShowHide config={{ trim: 120 }}>
                    <p>Two of the 6 participants on day 2 were given the task of finding a primary physician who accepts their Kaiser Permanente health insurance plan. Neither were able to successfully locate the information.</p>
                    <p>In both cases, the Kaiser Permanente doctor search page (https://healthy.kaiserpermanente.org/hawaii/doctors-locations?searchMGDocFacSelection=DOCTORS&searchDoctorFilter=HAW&searchLocationFilter=Select+an+area#/search-form) proved difficult to understand and use. Both participants tried clicking the “Doctors” option under  “Search type” thinking it was a search box. They never scrolled down to see the Search button at the bottom of the page. Both tried clicking “Locations” under “Search type” as well, thinking it will go to a new page. When little happened, they tried clicking on the map but that was difficult to control and navigate, and once they had clicked Locations, they could not see any doctors, just hospitals and clinics.</p>
                </ShowHide>
            </section>
            <section>
                <h4>Finding account access authorization form (HMSA and KP)</h4>
                <ShowHide config={{ trim: 120 }}>
                    <p>If time permitted, we asked participants to locate the form to grand (or revoke) account access on either hmsa.com or kpinhawaii.com.</p>
                    <p>Four of the 12 participants (across the two days) attempted the task on hmsa.com: 3 of them abandoned; 1 was successful. One participant of the 12 attempted the task on kpinhawaii.com. He abandoned the task.</p>
                    <p>The participants who attempted this task would expect to do this from their member account (behind login) and either add an account user or just give their member login information to the family member (or ask for the member’s login information). If that didn’t work, they expected to call HMSA or Kaiser Permanente to request or revoke access.</p>
                    <p>The HMSA team believes that the majority of visitors who go to the site to find the form are being directed there by HMSA Customer Support/Service and/or their physician.</p>
                </ShowHide>
            </section>
        </div>
    );
};

export default organic;