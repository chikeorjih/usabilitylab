import React from "react";
import Link from "gatsby-link";
import "../styles/styles.scss"

import heroImage from "../assets/health.png";

const ListLink = props => (
  <li className="nav-item">
    <Link to={props.to} activeClassName="active" exact={props.addExact}>
      {props.children}
    </Link>
  </li>
);

export default ({ children } = {}) => (
    <div>
        <div className="header-wrapper">
          <header className="header">
            <Link to="/" className="logo">
              <h2>
                <img className="logo-image" src={heroImage} alt="logo image"/>
                HCP
              </h2>
              <span className="sub"> | Usability Lab</span>
            </Link>
            <ul className="nav">
              <ListLink to="/" addExact={true}>Summary</ListLink>
              <ListLink to="/tasks">Tasks</ListLink>
              <ListLink to="/participants">Participants</ListLink>
              <ListLink to="/appendix">Appendix</ListLink>
            </ul>
          </header>
        </div>
        <div className="content-wrapper">
          <div className="content">
            {children()}
          </div>
        </div>  
  </div>
);