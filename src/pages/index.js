import React from "react";
import ShowHide from "../components/ShowHide";
import BarChart from "../components/BarChart";
import Expandable from "../components/Expandable";

export default () => (
  <div>
    <h1>Research Objective</h1>
    <p>
    The HMSA.com team (business, design, and development) wants to improve the usability and the end-to-end customer (consumer) experience with the HMSA.com site. 

    In late April 2018, we observed and studied how health insurance customers in Hawaii use HMSA’s consumer-facing site (pre-login experience) today, compared to how they complete similar tasks in Kaiser Permanente site for Hawaii (kpinhawaii.com).
    </p>

    <h2>Demographics</h2>
    <ShowHide config={{trim:150}}>
      <p>We conducted task-based, moderated sessions with 12 consumers from Honolulu. Each session was 1-on-1 and lasted a little over an hour (60+ minutes).</p>
      <table>
      <thead>
        <tr>
          <th>Age Group</th>
          <th>Breakdown</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Mellennials <span className="subtext">(21-36 years)</span>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            Gen X <span className="subtext">(21-36 years)</span>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            Baby Boomers <span className="subtext">(21-36 years)</span>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            Silent Generation <span className="subtext">(21-36 years)</span>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            Totals  <span className="subtext">(21-36 years)</span>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
      </tbody>
    </table> 
      <ul>
        <li>
          Five of the 12 participants had health insurance that they had purchased themselves; the rest had employee-sponsored insurance, from their own employer or as a dependent of their spouse or parent.
        </li> 
        <li>
          Half of the participants each day had HMSA health insurance, 2 each day had Kaiser Permanente.
        </li> 
        <li>
          One participant each day had health insurance benefits from either a national competitor (Humana Medicare supplemental) or a non-traditional cost sharing insurer (Liberty HealthShare).
        </li>
      </ul>
      <p>In the next section, we will give an overview of the top usability challenges and opportunities we identified for HMSA.com. This top-line report is an initial view into the problems and challenges that were trends across participants. It will be followed with a details report of findings and recommendations.</p>
    </ShowHide>
    {/* <BarChart config={{initial: 0, score: 8, total: 10, color: "#ff9108"}}/> */}
    <h2>Insights</h2>
    <Expandable>
      <h3>Consumers expect to easily choose the right coverage and control the monthly premium they pay (aka“the price”)</h3>
      <div className="expandable-content">
        Tester
      </div>
    </Expandable>
  </div>
);