import React from 'react'
import TextContainer from './TextContainer'

function InfoCard(props) {
  return (
    <React.Fragment>
      <div className={`InfoCard ${props.infoCardColor}`}>
        <TextContainer content={props} />
        <div className="illustration__container">
          <img src={props.image} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default InfoCard
