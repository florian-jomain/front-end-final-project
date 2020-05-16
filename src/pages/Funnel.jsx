import React, { Component } from 'react'
import Button from '../components/UI/Button'
import Hero from '../components/UI/Hero'
import UserFunnel from '../components/UI/UserFunnel'
import { NavLink } from 'react-router-dom'

class Funnel extends Component {
  state = {
    userType: null,
  }

  render() {
    let HeroText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat turpis sapien at nascetur sed vestibulum aenean et. Semper id elementum aliquet elementum. '

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
        <NavLink to="/signup/helper">
          <Button type="tertiary">Sign up as helper</Button>
        </NavLink>

        <NavLink to="/signup/charity">
          <Button type="tertiary"> Sign up as non-profit</Button>
        </NavLink>
      </div>
    )
  }
}

export default Funnel
