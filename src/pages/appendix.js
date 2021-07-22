import React from "react";
import { withPrefix } from 'gatsby-link'

import pdf from "../assets/pdf.svg";
import excel from "../assets/excel.png";
import sketch from "../assets/sketch.svg";


import Persona1 from "../assets/docs/HMSA_personas_Lani.pdf";
import Persona2 from "../assets/docs/HMSA_personas_Trey R2.pdf";
import Persona3 from "../assets/docs/HMSA_personas_Dan.pdf";


import photo1 from "../assets/photos/HMSA_workshop1.jpg";
import photo2 from "../assets/photos/HMSA_workshop2.jpg";
import photo4 from "../assets/photos/HMSA_workshop22.jpg";
import photo5 from "../assets/photos/HMSA_workshop60.jpg";
import photo6 from "../assets/photos/HMSA_workshop128.jpg";
import photo7 from "../assets/photos/HMSA_workshop132.jpg";
import photo8 from "../assets/photos/HMSA_workshop150.jpg";


export default () => (
  <div className="appendix">
    <h1>Appendix</h1>
    <p>WWTAL assisted the HCP.com team in assessing the user experience of HCP.com as well as one of its primary competitor, Kaiser Permanete(kpinhawaii.com). WWTAL conducted a usability workshop with HCP, gathered all the results and has provided on this site, the baseline usability research on HCP.com and kpinhawaii.com.</p>
    <p>
      Below are the various artifacts and documents used in this study. Included are the kickoff materials, recruiting and moderator guides used in the labs and the final data gathered from the lab.
    </p>
    <h3>Personas</h3>
    <ul>
      <li><img className="icon" src={pdf}/><a href={Persona1}>Lani</a></li>
      <li><img className="icon" src={pdf}/><a href={Persona2}>Trey</a></li>
      <li><img className="icon" src={pdf}/><a href={Persona3}>Dan</a></li>
      <li><img className="icon" src={sketch}/><a href={withPrefix('/HMSA_personas.sketch')}>All Personas</a></li>
    </ul>
    <section>
    <h2>Usability Session Gallery</h2>
      <img src={photo1}/>
      <img src={photo2}/>
      <img src={photo4}/>
      <img src={photo5}/>
      <img src={photo6}/>
      <img src={photo7}/>
      <img src={photo8}/>
    </section>
  </div>
);