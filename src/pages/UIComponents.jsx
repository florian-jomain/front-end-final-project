import React from 'react'
import Button from '../components/UI/Button'

const UIComponents = (props) => {
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
      </div>
    </React.Fragment>
  )
}

export default UIComponents
