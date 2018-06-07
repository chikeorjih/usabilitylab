import React from "react";
import Link from "gatsby-link";
import TaskList from "../data/task-list";

const taskList = TaskList.list.map((task, i) => {
  return (
    <li key={i}>
      <Link to={{ pathname: `/tasks/${task.url}`}} className="link">
        <span>{task.name}</span>
        <p>{task.summary}</p>
      </Link>
    </li>
  );
});

export default () => (
  <div>
    <ul className="page-links">
      <li>
        <Link to={{ pathname: '/tasks/organic' }} className="link">
          <span>Organic Task</span>
          <p>We gave all participants a task to observe how they will use the Internet to find and evaluate health insurance plans</p>
        </Link>
      </li>
      {taskList}
      <li>
        <Link to={{ pathname: '/tasks/authorization' }} className="link">
          <span>Account access authorization</span>
          <p>If time permitted, we asked participants to locate the form to grant (or revoke) account access on either hmsa.com or kpinhawaii.com.</p>
        </Link>
      </li>
    </ul>
  </div>
);