import React from 'react'
import Button from '../components/UI/Button'
import InfoCard from '../components/UI/InfoCard'
import LinkBox from '../components/UI/LinkBox'

const UIComponents = (props) => {
  // InfoCard
  let InfoCardText =
    'Digital transformation can be challenging for charities. Today, more than half of them do not have a clear digital strategy, and access to digital tools is still limited for some. We’re here to help.'
  let InfoCardImage = '../../media/teammates-3.svg'

  return (
    <React.Fragment>
      <div className="ui__page">
        <div className="centered">
          <h1>A page to display our UI components :)</h1>
        </div>

        <section className="buttons">
          <h4>Buttons</h4>
          <Button type="primary">Primary Button</Button>
          <Button type="secondary">Secondary Button</Button>
          <Button type="tertiary">Tertiary Button</Button>
        </section>

        <section className="text">
          <h1>This is a H1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            turpis sapien at nascetur sed vestibulum aenean et.
          </p>
          <h2>This is a H2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            turpis sapien at nascetur sed vestibulum aenean et.
          </p>
          <h3>This is a H3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            turpis sapien at nascetur sed vestibulum aenean et.
          </p>
          <h4>This is a H4</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            turpis sapien at nascetur sed vestibulum aenean et.
          </p>
          <h5>This is a H5</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            turpis sapien at nascetur sed vestibulum aenean et.
          </p>
        </section>

        <section className="infocard">
          <h3 className="centered">Infocard</h3>
          <p className="centered">
            Colors – $palePink, $paleGreen,$paleBlue, $paleYellow,{' '}
          </p>
          <InfoCard
            title="In need of digital"
            text={InfoCardText}
            HeroWide={true}
            image={InfoCardImage}
            infoCardColor="paleYellow"
          />
          <InfoCard
            title="In need of digital"
            text={InfoCardText}
            HeroWide={true}
            image={InfoCardImage}
            infoCardColor="palePink"
          />
        </section>

        <section className="linkBox">
          <h3 className="centered">Link Box</h3>
          <div className="flexed">
            <LinkBox emoji="🐯" title="Animals" text="14 projects" link="/" />

            <LinkBox
              emoji="🙏"
              title="Help out"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              button={true}
              buttonType="tertiary"
              buttonText="Sign up as helper"
              link="/signup/helper"
            />
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default UIComponents
