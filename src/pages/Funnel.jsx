import React from 'react'
import Hero from '../components/UI/Hero'
import UserFunnel from '../components/UI/UserFunnel'

function Funnel() {
  let HeroText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat turpis sapien at nascetur sed vestibulum aenean et. Semper id elementum aliquet elementum.'

  let HeroImage = '../../media/teammates-2.svg'

  return (
    <div>
      <Hero
        title="What do you want?"
        text={HeroText}
        button={false}
        HeroWide={false}
        image={HeroImage}
        buttonType="primary"
        buttonLink="/signup"
        buttonText="Create account"
      />

      <UserFunnel />
    </div>
  )
}

export default Funnel
