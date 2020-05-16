import React from 'react'
import TextContainer from './TextContainer'

function Hero(props) {
  let HeroClass = 'HeroWide'
  {
    props.HeroWide ? (HeroClass = `Hero__Wide`) : (HeroClass = `Hero__Small`)
  }

  return (
    <React.Fragment>
      <section className={HeroClass}>
        <TextContainer content={props} />

        {props.image && (
          <div className="illustration__container">
            <img src={props.image} alt="" />
          </div>
        )}
      </section>
    </React.Fragment>
  )
}

export default Hero
