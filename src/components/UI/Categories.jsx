import React from 'react'
import LinkBox from '../../components/UI/LinkBox'

function Categories() {
  return (
    <React.Fragment>
      <section className="Categories">
        <h2 className="serif centered">Browse categories</h2>
        <div className="LinkBox__container">
          <LinkBox emoji="🐯" title="Animals" text="14 projects" link="/projects" category="Animals" />
          <LinkBox emoji="🐯" title="Equality" text="14 projects" link="/projects" category="Equality"/>
          <LinkBox emoji="🐯" title="Poverty" text="14 projects" link="/projects" category="Poverty"/>
          <LinkBox emoji="🐯" title="Environment" text="14 projects" link="/projects" category="Environment"/>
          <LinkBox emoji="🐯" title="Arts" text="14 projects" link="/projects" category="Arts"/>
          <LinkBox emoji="🐯" title="Education" text="14 projects" link="/projects" category="Education"/>
          <LinkBox emoji="🐯" title="Covid-19" text="14 projects" link="/projects" category="Covid19"/>
          
        </div>
      </section>
    </React.Fragment>
  )
}

export default Categories
