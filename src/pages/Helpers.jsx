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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi qui alias a eligendi voluptatum accusantium inventore quis reiciendis officiis corrupti possimus repudiandae, labore harum facere nihil incidunt deleniti et illum magnam? Magni dignissimos ea, voluptas et facere porro odio, hic eos voluptatibus iste, optio totam illum pariatur ullam incidunt.";

    let InfoCardImage = "/media/teammates-3.svg";

    if (!this.state.helpers) {
      return null;
    }

    return (
      <React.Fragment>
        <div className='Helpers'>
          <div className='Helpers__infoCard'>
            <InfoCard
              title='In need of digital'
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
