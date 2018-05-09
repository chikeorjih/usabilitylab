import React from "react";
import Link from "gatsby-link";
import "../styles/styles.scss"

const ListLink = props =>
  <li className="nav-item">
    <Link exact to={props.to} activeClassName="active">
      {props.children}
    </Link>
  </li>;

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
          </header>
        </div>
        <div className="content-wrapper">
          <div className="content">
            {children()}
          </div>
        </div>  
  </div>
);