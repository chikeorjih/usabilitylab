import React from "react";
import ShowHide from "../../components/ShowHide";

import femaleSvg from "../../assets/female.svg";
import maleSvg from "../../assets/male.svg";

const authorization = (props) => {

    return (
        <div>
            <h1>Account access authorization</h1>
            <p>If time permitted, we asked participants to locate the form to grand (or revoke) account access on either hmsa.com or kpinhawaii.com.</p>
            <p>Four of the 12 participants (across the two days) attempted the task on hmsa.com: 3 of them abandoned; 1 was successful. One participant of the 12 attempted the task on kpinhawaii.com. He abandoned the task</p>
            <p>The participants who attempted this task would expect to do this from their member account (behind login) and either add an account user or just give their member login information to the family member (or ask for the member’s login information). If that didn’t work, they expected to call HMSA or Kaiser Permanente to request or revoke access.</p>
            <p>The HMSA team believes that the majority of visitors who go to the site to find the form are being directed there by HMSA Customer Support/Service and/or their physician.</p>
        </div>
    );
};

export default authorization;