import React from "react";
import { withPrefix } from 'gatsby-link'

import pdf from "../assets/pdf.svg";
import excel from "../assets/excel.png";
import sketch from "../assets/sketch.svg";

import Kickoff1 from "../assets/docs/Compariative_Usability_Lab_Kick-off.pdf";
import Screening1 from "../assets/docs/ParticipantScreeningCriteria_d3.pdf";
import Moderator1 from "../assets/docs/HMSA_ModeratorGuide_Day1VerB.pdf";
import Moderator2 from "../assets/docs/HMSA_ModeratorGuide_Day2VerB.pdf";
import Observer1 from "../assets/docs/Observer_materials.pdf";
import Persona1 from "../assets/docs/HMSA_personas_Lani.pdf";
import Persona2 from "../assets/docs/HMSA_personas_Trey R2.pdf";
import Persona3 from "../assets/docs/HMSA_personas_Dan.pdf";


export default () => (
  <div className="appendix">
    <h1>Appendix</h1>
    <p>WWTAL assisted the HMSA.com team in assessing the user experience of HMSA.com as well as one of its primary competitor, Kaiser Permanete(kpinhawaii.com). WWTAL conducted a workshop with partner Fieldwork Network, gathered all the results and has provided on this site, the baseline usability research on HMSA.com and kpinhawaii.com.</p>
    <p>
      Below are the various artifacts and documents used in this study. Included are the kickoff materials, recruiting and moderator guides used in the labs and the final data gathered from the lab.
    </p>
    <h3>Lab kick-off</h3>
    <ul>
      <li><img src={pdf}/><a href={Kickoff1}>UMSA Usability Kickoff</a></li>
    </ul>
    <h3>Participant screening and recruiting</h3>
    <ul>
      <li><img src={pdf}/><a href={Screening1}>Participant Screener</a></li>
    </ul>
    <h3>Lab test plan</h3>
    <ul>
      <li><img src={pdf}/><a href={Moderator1}>Moderator Guide Day 1</a></li>
      <li><img src={pdf}/><a href={Moderator2}>Moderator Guide Day 2</a></li>
    </ul>
    <h3>Lab day materials</h3>
    <ul>
      <li><img src={pdf}/><a href={Observer1}>Observer Guide</a></li>
    </ul>
    <h3>Lab data</h3>
    <ul>
      <li><img src={excel}/><a href={withPrefix('/HMSA_Usability_Lab_Data.xlsx')}>Lab Data</a></li>
    </ul>
    <h3>Updated personas</h3>
    <ul>
      <li><img src={pdf}/><a href={Persona1}>Lani</a></li>
      <li><img src={pdf}/><a href={Persona2}>Trey</a></li>
      <li><img src={pdf}/><a href={Persona3}>Dan</a></li>
      <li><img src={sketch}/><a href={withPrefix('/HMSA_personas.sketch')}>All Personas</a></li>
    </ul>
  </div>
);