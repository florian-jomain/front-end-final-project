import React from "react";
import { Link } from "react-router-dom";

const TeamMembersCard = (props) => {
  return (
    <div className='teamMembersCard'>
      <h5 className='teamMembersCard__header'>Team members</h5>
      <div className='teamMembersCard__images'>
        {props.members.map((member, index) => (
          <div key={index} className='teamMembersCard__rounded-div'>
            <Link to={"/user/"+ member._id}>
            <img
              key={index}
              className='teamMembersCard__image'
              src={member.image}
              alt={member.username}
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersCard;
