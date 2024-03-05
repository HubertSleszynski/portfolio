import React from "react";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card container " key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <p className="project__technologies">{item.technologies}</p>
      <p className="project__description">{item.description}</p>
      <div className="project__buttons">
        <a href={item.github} target="_blank" className="project__button">
          <i className="bx bxl-github"></i>
        </a>
        <a href={item.live} target="_blank" className="project__button">
          <i className="bx bx-code-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
