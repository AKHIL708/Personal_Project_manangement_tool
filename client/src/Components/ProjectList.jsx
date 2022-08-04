import React from "react";

export default function ProjectList(props) {
  return (
    <>
      <div className="projectListContainer">
        <div className="projectSection">
          <h1>{props.headingName}</h1>
          <p>{props.projectname}</p>
        </div>

        <div className="projectSection">
          <h1>{props.headingGitRepo}</h1>
          <a target={"_blank"} rel="noreferrer" href={props.projectgitRepo}>
            {props.gitName}
          </a>
        </div>

        <div className="projectSection">
          <h1>{props.headingLink} </h1>
          <a target={"_blank"} rel="noopener noreferrer" href={props.projectLink}>
            {props.Link}
          </a>
        </div>

        <div className="projectSection">
          <h1>{props.headingDetails}</h1>
          <p>{props.projectDetails}</p>
        </div>
        <button onClick={props.arrayDeleteFunction}>{props.arrayListDeleteBtn}</button>
      </div>
    </>
  );
}
