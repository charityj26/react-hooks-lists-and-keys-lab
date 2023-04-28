import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name);
  const newTech=technologies.map((tech)=>{
    <span key={tech}>{tech}</span>;
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech,index)=>
        <span
         key={index}>{tech}
        </span>)}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
