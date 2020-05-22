import React from 'react'
import LinkBox from './LinkBox'

function UserFunnel() {
  return (
    <React.Fragment>
      <section className="Categories funnel">
        <div className="LinkBox__container funnel nowrap centered">
          <LinkBox
            emoji="🙏"
            title="Give your time"
            text="You’re just about to make a difference. One more click to get you started"
            button={true}
            buttonType="tertiary"
            buttonText="Sign up as volunteer"
            link="/signup/helper"
          />

          <LinkBox
            emoji="🔍"
            title="Create a project"
            text="Ready to launch that new website you have been dreaming about?"
            button={true}
            buttonType="tertiary"
            buttonText="Sign up as charity"
            link="/signup/charity"
          />
        </div>
      </section>
    </React.Fragment>
  )
}

export default UserFunnel
