import React from "react";
import BackButton from "../components/UI/BackButton";
import TagsCard from "../components/UI/TagsCard";
import TeamMembersCard from "../components/UI/TeamMembersCard";

const SingleProject = (props) => {
  console.log(props);

  return (
    <React.Fragment>
      <BackButton />
      <h1>{props.title}</h1>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img className='' src={props.image} alt={props.name} />
      <p>{props.description}</p>
      <div className='rightColumn'>
        <TeamMembersCard />
        <TagsCard />
      </div>
    </React.Fragment>
  );
};

export default SingleProject;
