import React from "react";
import Link from "gatsby-link";

export default () => (
  <div>
    <ul className="page-links">
      <li>
        <Link to="/tasks/hmsa-path-to-app" className="link">
          <span>HMSA Path To Application</span>
          <p>A user attempts to apply for benefits on hmsa.com</p>
        </Link>
      </li>
      <li>
        <Link to="/tasks/hmsa-path-to-app" className="link">
          <span>Kaiser Permanente Path To Application</span>
          <p>A user attempts to apply for benefits on hmsa.com</p>
        </Link>
      </li>
      <li>
        <Link to="/tasks/hmsa-path-to-app" className="link">
          <span>HMSA Gym Membership</span>
          <p>A user attempts to apply for benefits on hmsa.com</p>
        </Link>
      </li>
      <li>
        <Link to="/tasks/hmsa-path-to-app" className="link">
          <span>HMSA Find A Provider</span>
          <p>A user attempts to apply for benefits on hmsa.com</p>
        </Link>
      </li>
    </ul>
  </div>
);