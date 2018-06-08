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
import wires1 from "../assets/pdfs/HMSA_path_to_application.pdf";
import wires2 from "../assets/pdfs/HMSA_provider_search.pdf";

import photo1 from "../assets/photos/HMSA_workshop1.jpg";
import photo2 from "../assets/photos/HMSA_workshop2.jpg";
import photo3 from "../assets/photos/HMSA_workshop9.jpg";
import photo4 from "../assets/photos/HMSA_workshop22.jpg";
import photo5 from "../assets/photos/HMSA_workshop60.jpg";
import photo6 from "../assets/photos/HMSA_workshop128.jpg";
import photo7 from "../assets/photos/HMSA_workshop132.jpg";
import photo8 from "../assets/photos/HMSA_workshop150.jpg";


export default () => (
  <div className="appendix">
    <h1>Appendix</h1>
    <p>WWTAL assisted the HMSA.com team in assessing the user experience of HMSA.com as well as one of its primary competitor, Kaiser Permanete(kpinhawaii.com). WWTAL conducted a usability workshop with HMSA, gathered all the results and has provided on this site, the baseline usability research on HMSA.com and kpinhawaii.com.</p>
    <p>
      Below are the various artifacts and documents used in this study. Included are the kickoff materials, recruiting and moderator guides used in the labs and the final data gathered from the lab.
    </p>
    <h3>Lab kick-off</h3>
    <ul>
      <li><img className="icon" src={pdf}/><a href={Kickoff1}>UMSA Usability Kickoff</a></li>
    </ul>
    <h3>Participant screening and recruiting</h3>
    <ul>
      <li><img className="icon" src={pdf}/><a href={Screening1}>Participant Screener</a></li>
    </ul>
    <h3>Lab test plan</h3>
    <ul>
      <li><img className="icon" src={pdf}/><a href={Moderator1}>Moderator Guide Day 1</a></li>
      <li><img className="icon" src={pdf}/><a href={Moderator2}>Moderator Guide Day 2</a></li>
    </ul>
    <h3>Lab day materials</h3>
    <ul>
      <li><img className="icon" src={pdf}/><a href={Observer1}>Observer Guide</a></li>
    </ul>
    <h3>Lab data</h3>
    <ul>
      <li><img className="icon" src={excel}/><a href={withPrefix('/HMSA_Usability_Lab_Data.xlsx')}>Lab Data</a></li>
    </ul>
    <h3>Updated personas</h3>
    <ul>
      <li><img className="icon" src={pdf}/><a href={Persona1}>Lani</a></li>
      <li><img className="icon" src={pdf}/><a href={Persona2}>Trey</a></li>
      <li><img className="icon" src={pdf}/><a href={Persona3}>Dan</a></li>
      <li><img className="icon" src={sketch}/><a href={withPrefix('/HMSA_personas.sketch')}>All Personas</a></li>
    </ul>
    <h3>Recommendations</h3>
    <ul>
      <li><img className="icon" src={pdf}/><a href={wires1}>HMSA path to application wireframes</a></li>
      <li><img className="icon" src={pdf}/><a href={wires2}>HMSA find a doctor wireframes</a></li>
    </ul>
    <section>
    <h2>Usability Session Gallery</h2>
      <img src={photo1}/>
      <img src={photo2}/>
      <img src={photo3}/>
      <img src={photo4}/>
      <img src={photo5}/>
      <img src={photo6}/>
      <img src={photo7}/>
      <img src={photo8}/>
    </section>
  </div>
);