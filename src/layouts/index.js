import React from "react";
import Link from "gatsby-link";
import "../styles/styles.scss"

import heroImage from "../assets/people-computer.svg";

const ListLink = props =>
  <li className="nav-item">
    <Link to={props.to} activeClassName="active">
      {props.children}
    </Link>
  </li>;
console.log(heroImage);
export default ({ children }) => (
    <div>
        <div className="header-wrapper">
          <header className="header">
            <Link to="/" className="logo">
              <h2>HMSA <span className="sub"> | Usability Lab</span></h2>
            </Link>
            <ul className="nav">
              <ListLink to="/">Summary</ListLink>
              <ListLink to="/tasks/">Tasks</ListLink>
              <ListLink to="/participants/">Participants</ListLink>
              <ListLink to="/appendix/">Appendix</ListLink>
            </ul>
            <img className="hero-image" src={heroImage} alt="gero image"/>
          </header>
        </div>
        <div className="content-wrapper">
          <div className="content">
            {children()}
          </div>
        </div>  
  </div>
);