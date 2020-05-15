import React from 'react'
import LinkBox from '../../components/UI/LinkBox'

function Categories() {
  return (
    <React.Fragment>
      <section className="Categories">
        <h2 className="serif centered">Browse categories</h2>
        <div className="LinkBox__container">
          <LinkBox emoji="🐯" title="Animals" text="14 projects" link="/" />
          <LinkBox emoji="🐯" title="Animals" text="14 projects" link="/" />
          <LinkBox emoji="🐯" title="Animals" text="14 projects" link="/" />
          <LinkBox emoji="🐯" title="Animals" text="14 projects" link="/" />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Categories
