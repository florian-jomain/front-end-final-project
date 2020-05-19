import React from "react";
import Tag from "./Tag";
import Charity from "./Charity";

function ProjectCard(props) {
  const { image, title, description, skills, id_owner } = props.project;

  return (
    <React.Fragment>
      <div className='ProjectCard'>
        <img className='ProjectCard__image' src={image} alt={title} />
        <div className='ProjectCard__text'>
          <h3>{title}</h3>
          <div className='ProjectCard__charity'>
            <Charity
              charityName={id_owner.username}
              charityImage={id_owner.image}
            />
          </div>
          <div className='ProjectCard__tags'>
            {skills.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
          <p className='ProjectCard__description'>{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectCard;
