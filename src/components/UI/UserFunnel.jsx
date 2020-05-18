import React from 'react'
import LinkBox from './LinkBox'

function UserFunnel() {
  return (
    <React.Fragment>
      <section className="Categories">
        <div className="LinkBox__container nowrap centered">
          <LinkBox
            emoji="🙏"
            title="Help out"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            button={true}
            buttonType="tertiary"
            buttonText="Sign up as helper"
            link="/signup/helper"
          />

          <LinkBox
            emoji="🔍"
            title="Start project"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            button={true}
            buttonType="tertiary"
            buttonText="Sign up as non-profit"
            link="/signup/charity"
          />
        </div>
      </section>
    </React.Fragment>
  )
}

export default UserFunnel
