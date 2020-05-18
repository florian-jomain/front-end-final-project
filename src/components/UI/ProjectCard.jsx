import React from "react";
import Tag from "./Tag";

function ProjectCard(props) {
  const { image, title, description, skills } = props.project;
  console.log(props.project);
  return (
    <React.Fragment>
      <div className='ProjectCard'>
        <img className='ProjectCard__image' src={image} alt={title} />
        <div className='ProjectCard__text'>
          <h3>{title}</h3>
          <div className='ProjectCard__charity'>
            <h5>{title}</h5>
          </div>
          <div className='ProjectCard__tags'>
            {skills.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectCard;
