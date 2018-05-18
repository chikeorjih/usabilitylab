import React from "react";
import Link from "gatsby-link";
import TaskList from "../data/task-list";

const taskList = TaskList.list.map((task, i) => {
  return (
    <li key={i}>
      <Link to={{ pathname: `tasks/task/${task.url}`, task: task}} className="link">
        <span>{task.name}</span>
        <p>{task.summary}</p>
      </Link>
    </li>
  );
});

export default () => (
  <div>
    <ul className="page-links">
      {taskList}
    </ul>
  </div>
);