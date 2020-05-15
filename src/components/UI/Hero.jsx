import React from 'react'
import TextContainer from '../../components/UI/TextContainer'

function Hero() {
  let HeroText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat turpis sapien at nascetur sed vestibulum aenean et.'

  return (
    <React.Fragment>
      <section className="Hero">
        <TextContainer
          title="Lorem ipsum"
          text={HeroText}
          button={true}
          buttonType="primary"
          buttonLink="/signup"
          buttonText="Create account"
        />

        <div className="illustration__container">
          <img src="../../media/teammates-1.svg" alt="" />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hero
