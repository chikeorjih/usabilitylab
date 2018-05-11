import React from "react";
import Link from "gatsby-link";

export default () => (
  <div>
    <ul className="page-links">
      <li>
        <Link to="/tasks/hmsa-path-to-app" className="link">
          <a>HMSA Path To Application</a>
          <p>A user attempts to apply for benefits on hmsa.com</p>
        </Link>
      </li>
      <li>
        <Link to="/tasks/hmsa-path-to-app" className="link">
          <a>Kaiser Permanente Path To Application</a>
          <p>A user attempts to apply for benefits on hmsa.com</p>
        </Link>
      </li>
      <li>
        <Link to="/tasks/hmsa-path-to-app" className="link">
          <a>HMSA Gym Membership</a>
          <p>A user attempts to apply for benefits on hmsa.com</p>
        </Link>
      </li>
      <li>
        <Link to="/tasks/hmsa-path-to-app" className="link">
          <a>HMSA Find A Provider</a>
          <p>A user attempts to apply for benefits on hmsa.com</p>
        </Link>
      </li>
    </ul>
  </div>
);