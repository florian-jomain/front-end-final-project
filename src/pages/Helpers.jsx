import React, { Component } from "react";
import HelperCard from "../components/UI/HelperCard";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import InfoCard from "../components/UI/InfoCard";

export class Helpers extends Component {
  state = {
    helpers: [],
  };

  componentDidMount() {
    apiHandler
      .getHelpers()
      .then((apiResponse) => {
        this.setState({
          helpers: apiResponse,
        });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    let InfoCardText =
      "If you have a digital project you would need help developing, we probably can help put you in touch with the right team of people. Simply create an account to get started on your first project.";

    let InfoCardImage = "/media/teammates-3.svg";

    if (!this.state.helpers) {
      return null;
    }

    return (
      <React.Fragment>
        <div className='Helpers'>
          <div className='Helpers__infoCard'>
            <InfoCard
              title='Are you a non-profit in need of help?'
              text={InfoCardText}
              HeroWide={true}
              image={InfoCardImage}
              infoCardColor='paleGreen'
            />
          </div>

          <div className='Helpers__cards'>
            {this.state.helpers.map((helper, index) => (
              <Link key={index} to={`/user/${this.state.helpers[index]._id}`}>
                <HelperCard key={index} index={index} helper={helper} />
              </Link>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Helpers;
