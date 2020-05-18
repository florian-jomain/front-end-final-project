import React from "react";

function ProjectCard(props) {
  console.log(props.project);
  const { image, title, description } = props.project;
  return (
    <div>
      <div className='ProjectCard'></div>
      <img className='ProjectCard__image' src={image} alt={title} />
      <div className='ProjectCard__text'>
        <h3 className='ProjectCard__title'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
