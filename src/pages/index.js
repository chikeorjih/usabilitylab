import React from "react";
import ShowHide from "../components/ShowHide";
import Expandable from "../components/Expandable";

import femalePng from "../assets/woman.png";
import malePng from "../assets/man.png";
import womanImage from "../assets/teacher.png";

export default () => (
  <div>
    <div className="hero-extend"></div>
    <div className="objective">
      <h1>Research <span className="highlight">Objective</span></h1>
      <p>
        The HCP.com team (business, design, and development) wants to improve the usability and the end-to-end customer (consumer) experience with the HCP.com site.
        In late April 2018, we observed and studied how health insurance customers in Hawaii use HCP’s consumer-facing site (pre-login experience) today, compared to how they complete similar tasks in Kaiser Permanente site for Hawaii (kpinhawaii.com).
      </p>
    </div>
    <h2>Demographics</h2>
    <ShowHide config={{ trim: 150 }}>
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
          <td className="people">
            <img src={femalePng} alt="male"/>
            <img src={malePng} alt="male"/>
            <img src={malePng} alt="male"/>
          </td>
          <td className="count">3</td>
        </tr>
        <tr>
          <td>
            Gen X <span className="subtext">(37-57 years)</span>
          </td>
          <td className="people">
            <img src={femalePng} alt="male"/>
            <img src={femalePng} alt="male"/>
          </td>
          <td className="count">2</td>
        </tr>
        <tr>
          <td>
            Baby Boomers <span className="subtext">(65-75 years)</span>
          </td>
          <td className="people">
            <img src={femalePng} alt="male"/>
            <img src={femalePng} alt="male"/>
            <img src={femalePng} alt="male"/>
            <img src={malePng} alt="male"/>
            <img src={malePng} alt="male"/>
            <img src={malePng} alt="male"/>
          </td>
          <td className="count">6</td>
        </tr>
        <tr>
          <td>
            Silent Generation <span className="subtext">(76+ years)</span>
          </td>
          <td className="people">
            <img src={femalePng} alt="male"/>
          </td>
          <td className="count">1</td>
        </tr>
        <tr>
          <td>
            Totals  <span className="subtext">(24-80 years)</span>
          </td>
          <td className="people">
            <img src={femalePng} alt="male"/>
            <img src={femalePng} alt="male"/>
            <img src={femalePng} alt="male"/>
            <img src={femalePng} alt="male"/>
            <img src={femalePng} alt="male"/>
            <img src={femalePng} alt="male"/>
            <img src={femalePng} alt="male"/>
            <img src={malePng} alt="male"/>
            <img src={malePng} alt="male"/>
            <img src={malePng} alt="male"/>
            <img src={malePng} alt="male"/>
            <img src={malePng} alt="male"/>
            <img src={malePng} alt="male"/>
          </td>
          <td className="count">12</td>
        </tr>
        </tbody>
      </table>
      <ul>
        <li>
          Five of the 12 participants had health insurance that they had purchased themselves; the rest had employee-sponsored insurance, from their own employer or as a dependent of their spouse or parent.
        </li>
        <li>
          Half of the participants each day had HCP health insurance, 2 each day had Kaiser Permanente.
        </li>
        <li>
          One participant each day had health insurance benefits from either a national competitor (Humana Medicare supplemental) or a non-traditional cost sharing insurer (Liberty HealthShare).
        </li>
      </ul>
      <p>In the next section, we will give an overview of the top usability challenges and opportunities we identified for HCP.com. This top-line report is an initial view into the problems and challenges that were trends across participants. It will be followed with a details report of findings and recommendations.</p>
    </ShowHide>
    <h2 className="insights">Insights</h2>
      <div className="expandable-wrapper">
        <Expandable number='1'>
          <h3>Consumers expect to easily choose the right coverage and control the monthly premium they pay (aka“the price”)</h3>
          <div className="expandable-content">
            <p>The majority of the participants were overwhelmed by the number of plans and options from both HCP.com and kpinhawaii.com. They left both sites without applying, opting instead to call someone in customer service, or solicit recommendations from friends or family.</p>
            <ul>
              <li>Choosing the right plan needs to be effortless, easy, while also reducing the risk of huge medical costs if accident or illness occurs;</li>
              <li>To that end, with each lesser expensive option, tell them what they are getting, and what they have given up;</li>
              <li>These consumers do not want to pay for unnecessary and expensive coverage; and</li>
              <li>Often, the proximity of good quality health care providers (doctors, clinics, hospitals) to their home and work will affect what plan they choose (HCP vs. Kaiser Permanente).</li>
            </ul>
            <p>Ultimately, consumers want the site to empower them to get to the right plan for them faster than they can get there by calling customer service, visiting a neighborhood center, or asking friends/family for recommendations. They want the site to filter their options to the one with the right amount of coverage and lower monthly costs:</p>
          </div>
        </Expandable>
        <Expandable number='2'>
          <h3>HCP.com pages and content need to empower consumers to focus and scan</h3>
          <div className="expandable-content">
            <p>Whatever the goal is on a given page (for example, finding a health care provider), the consumer should be able to immediately recognize it and be confident about what to do next to achieve their goal. Sometimes the consumer’s initial goal is not looking at a plan benefit. Instead, they may want to see if there are physicians or clinics a convenient distance from their home, or a wellness program.</p>
            <p>To that end, the content, layout, and call-to-action on every HCP.com page needs to simple, obvious, and direct. That way, the consumer’s first click or interaction with the site will be the right interaction (path) to get them to application/enrollment, or find a healthcare provider, or get information. Site imagery, icons, and multimedia should meet, or exceed, their expectations of simplicity, clarity, and brevity.</p>
          </div>
        </Expandable>
        <Expandable number='3'>
          <h3>Somebody should always be online to help me</h3>
          <div className="expandable-content">
            <p>Many of the participants abandoned HCP.com and kpinhawaii.com to call a customer service number they found while evaluating health insurance plans. We did not test the telephone support experience, but there is a risk the consumer will delay calling, forget to call, or give up if they have to wait a long time to talk to someone.</p>
            <p>One participant on day 1 used Kaiser Permanente’s live chat feature, though was dismayed by the long delay. Had she not been in the lab, it is likely she would have left kpinhawaii.com – and the chat she started – before she ever received the initial reply.</p>
            <p>Live chat, or instant calling (on smartphones) – as well as timely responses are key to providing winning customer support.</p>
          </div>
        </Expandable>
        <Expandable number='4'>
          <h3>Allow consumers to compare HCP plans to other insurers (Kaiser Permanente, etc.)</h3>
          <div className="expandable-content">
            <p>Several participants visited sites for 2-3 health insurance providers. They want to not only see the different plans each insurer offers in Hawaii as well as compare them to other insurers.</p>
            <p>One woman (mistakenly) believed the Kaiser Permanente plan comparison page would show her their competitors plans if she selected the option to see “Market place plans offered through healthcare.gov” (see Figure 1 below).</p>
            <p>While this was, in fact, untrue, she stated her trust in Kaiser Permanente grew because she thought they were showing how they compared to their competition.</p>
            <p>A few of the 65+ participants on day 2 stated the ability to compare across all health insurers as one idea to make the HCP.com path-to-application/enrollment better (easier, faster, and more empowering).</p>
            <p>Those consumers who suggested this as an improvement stated that a company who is secure it the quality and value of their products would benefit from showing how they stacked up against their competitors.</p>
          </div>
        </Expandable>
        <Expandable number='5'>
          <h3>Simplify language and terminology</h3>
          <div className="expandable-content">
            <p>All consumers struggled to explain the benefits and options included with any health insurance plans on either HCP.com or kpinhawaii.com. The language of health insurance was hard to understand and was too often interpreted incorrectly.</p>
            <p>Example: Several consumer participants wrongly interpreted “maximum out-of-pocket” as the maximum amount that HCP or Kaiser Permanente would pay out for their healthcare costs in a single year. This caused them to think no plan had enough coverage.</p>
            <p>Making the language of health insurance plain-spoken English is an immense opportunity to differentiate HCP.com and their path-to-application/enrollment from Kaiser Permanente.</p>
            <p>In addition, the consumer participants we studied were overwhelmed with the information in the HCP summary of benefits PDF. Most clicked the link to that from the Compare Plans page but quickly left that PDF as it would take too much time to read and digest.</p>
            <p>Make the complex simple.</p>
          </div>
        </Expandable>
        <Expandable number='6'>
          <h3>Consumers started their search for health insurance looking for their doctor – or a specialist they needed</h3>
          <div className="expandable-content">
            <p>One of the key differences between HCP and Kaiser Permanente that consumers mentioned was the “limited” choice of physicians with latter. We observed a few participants go to the HCP.com Find a Doctor search (from the header of any page).</p>
            <p>Spotlighting providers who practice near the site visitor’s home (or work), based on the location of their computer or device, and providing key information (photo, specialty, office hours) may prove an effective way to acquire new members/customers. Making it easier to search for a provider as a step in selecting and purchasing a health care plan will create a more fluid experience for the new or returning customer.</p>
            <p>It is important to highlight and prioritize those physicians who are accepting new patients – as well as to allow visibility into when a busy, popular doctor becomes available (think of the “wish list” feature on a lot of eCommerce sites).</p>
          </div>
        </Expandable>
        <Expandable number='7'>
          <h3>Web page controls and calls-to-action need to be clear and unambiguous.</h3>
          <div className="expandable-content">
            <p>Both HCP.com and kpinhawaii.com presented consumer participants with Web page content that either did not work as expected or were not controls/buttons at all .</p>
            <p>On HCP.com, the “Freedom to Choose” lightbox dialog showed a map of health care providers and locations in the HCP network by default. The three tiles – Freedom to choose, Convenient care, and Travel worry free – were misunderstood by every participant who landed on this dialog.</p>
            <p>First, the participant would click the “Freedom to choose” tile and there was no obvious change to the map (lack of feedback). Some participants clicked these 2 or 3 times, with the goal of searching for – and then choosing (as the title indicates) – a healthcare provider.</p>
            <p>When that did not work, the participants double-clicked on the map expecting it to zoom in as Google maps works today . This made the content in the dialog difficult, if not impossible, to use.</p>
          </div>
        </Expandable>
        <Expandable number='8'>
          <h3>Consumers want to trust that the information they share on HCP.com or kpinhawaii.com is secure and they are safe from identity theft</h3>
          <div className="expandable-content">
            <p>Many consumers were reticent to enter personal data just to see the different insurance plans. When a site required them to enter their income, age, birthdate, or gender, they asked why this information was needed. Most did not immediately recognize that monthly premium rates – and even some plans – have age and income requirements. </p>
            <p>This may be explained by those who have always had employer-sponsored insurance. For those who are currently self-insured (both under and over 65 years), this is a once yearly task, so remembering how age affects premiums may be forgotten over time.</p>
            <p>One recommendation was to allow consumers to see plans and prices, and then ask for information. It may help to make the reason why specific information is requested and what the user will gain by giving HCP that information. Will it shorten the application/enrollment and approval processes?</p>
          </div>
        </Expandable>
        <Expandable number='9'>
          <h3>If confused, consumers will just stick with what they know</h3>
          <div className="expandable-content">
            <p>On the organic path-to-application/enrollment, several participants would click on Google search results, or search for, their current health insurance provider. </p>
            <p>Making HCP.com content plain-spoken, easy to scan, and getting the user on the right path will empower consumers to make decisions they are confident are right for themselves and their households.</p>
          </div>
        </Expandable>
        <Expandable number='10'>
          <h3>Consumers ask for advice, recommendations from others</h3>
          <div className="expandable-content">
            <p>If the path to evaluating and comparing plans is too cumbersome and time-consuming, they will turn to recommendations from family, friends, colleagues, and even acquaintances. In the end, they have not found the information and knowledge to confidently make their own decision.</p>
            <p>Consumers are influenced by the products and services they see their friends and neighbors use. While they don’t actually watch them “use” their health insurance, they hear about their experiences with doctors, office visits, and hospitalizations. When family, friends, or colleagues complain about a doctor’s “bedside manner” or big hospital bills, consumers remember and try to avoid the same experience.</p>
          </div>
        </Expandable>
      </div>
  </div>
);