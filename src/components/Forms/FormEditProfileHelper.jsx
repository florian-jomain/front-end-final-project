import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import { withUser } from "../../components/Auth/withUser";
import apiHandler from "../../api/apiHandler";
import Button from "../../components/UI/Button";
import { TagBox } from "react-tag-box";
import LocationAutoComplete from "../LocationAutoComplete";

const options = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Ruby",
  "Rails",
  "MySQL",
  "NoSQL",
  "PHP",
  "Python",
  "C",
  "C++",
  "TypeScript",
  "Vue.js",
  "Angular",
  "Java",
  "Docker",
  "Azure",
  "React Native",
  "Swift",
  "Redux",
  "GraphQL",
  "Android",
  "Fullstack",
  "Bootstrap",
  "Spring",
  "PostgreSQL",
  "Agile methodology",
  "jhipster",
  "Heroku",
  "Netlify",
  "Wordpress",
  "Ionic",
  "Firebase",
  "Meteor.js",
  "API",
  "Django",
  "Git",
  "Symfony",
  "Scrum",
  "Laravel",
  "Semantic UI",
  "jQuery",
  "Figma",
  "Sketch",
  "InVision",
  "Zeplin",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Adobe Illustrator",
  "Product Design",
  "User Testing",
  "UI Design",
  "UX Design",
  "Design Thinking",
  "Service Design",
  "Logo Design",
  "Graphic Design",
  "Print Design",
  "Workshops",
  "Wireframing",
  "Webdesign",
  "Artistic Direction",
  "Mobile Design",
  "Project Management",
  "Reporting",
  "Data analytics",
  "Web analytics",
  "Product Management",
  "Design Sprint",
  "E-commerce",
  "Go",
].map((option) => ({
  label: option.toLowerCase(),
  value: option.toLowerCase(),
  name: option.toLowerCase(),
}));

let tagsArray = [];
let skillsArray = [];

class EditProfileHelper extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
    tags: options,
    selected: [],
    skills: [],
    category: "",
    frequency: "",
    status: "",
    tempUrl: "",
    bio: "",
  };

  handleChange = (event) => {
    let key = event.target.name;
    switch (event.target.type) {
      case "file":
        this.setState({
          tempUrl: URL.createObjectURL(event.target.files[0]),
          image: event.target.files[0],
        });
        break;
      case "checkbox":
        this.setState({ [key]: event.target.checked });
        break;
      default:
        this.setState({ [key]: event.target.value });
    }
  };

  handlePlace = (place) => {
    // This handle is passed as a callback to the autocomplete component.
    // Take a look at the data and see what you can get from it.
    // Look at the item model to know what you should retrieve and set as state.
    console.log(place.place_name);

    this.setState({ location: place.place_name });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();

    if (this.state.name) {
      formData.append("name", this.state.name);
    }

    if (this.state.image) {
      formData.append("image", this.state.image);
    }

    if (this.state.links) {
      formData.append("links", this.state.links);
    }

    if (this.state.bio) {
      formData.append("bio", this.state.bio);
    }

    if (this.state.skills[0] === "") {
      return null;
    } else if (this.state.skills) {
      formData.append("skills", this.state.skills);
    }

    if (this.state.location) {
      formData.append("location", this.state.location);
    }

    if (this.state.phone) {
      formData.append("phone", this.state.phone);
    }

    apiHandler
      .createProfileHelper(formData)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/user-profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onSelect = (tag) => {
    const newTag = {
      label: tag.label,
      value: tag.value || tag.label,
      name: tag.name || tag.label,
    };
    tagsArray.push(newTag);
    skillsArray.push(tag.name);

    this.setState({
      selected: tagsArray,
      skills: skillsArray,
    });
  };

  remove = (tag) => {
    this.setState({
      selected: this.state.selected.filter((t) => t.value !== tag.value),
    });
  };

  render() {
    console.log("state", this.state.skills);
    let imgSrc = null;
    if (!this.context.user) {
      this.props.history.push("/");
      return true;
    } else if (this.state.tempUrl === "") {
      imgSrc = this.context.user.image;
    } else imgSrc = this.state.tempUrl;

    return (
      <React.Fragment>
        <div className='input__form'>
          <div className='user__image round__image'>
            <img src={imgSrc} alt={this.context.user.username} />
          </div>
        </div>

        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className='form__group'>
            <label htmlFor='image' className='custom-upload label'>
              Upload profile image
            </label>
            <input className='input' type='file' id='image' name='image' />
          </div>

          <div className='form__group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              defaultValue={this.context.user.name}
            />
          </div>
          <div className='form__group'>
            <label htmlFor='skills'>Your skills</label>
            <TagBox
              tags={this.state.tags}
              selected={this.state.selected}
              onSelect={this.onSelect}
              removeTag={this.remove}
              backspaceDelete={true}
              placeholder='Start to type to add a skill'
              defaultValue={this.context.user.skills}
            />
          </div>
          <div className='form__group'>
            <label htmlFor='bio'>Your Bio</label>
            <textarea
              type='textarea'
              id='bio'
              name='bio'
              placeholder='Write something about yourself'
              defaultValue={this.context.user.bio}
            />
          </div>
          <div className='form__group'>
            <label htmlFor='location'>Location</label>
            <LocationAutoComplete
              defaultValue={this.context.user.location}
              onSelect={this.handlePlace}
            />
            {/* <input
              type="text"
              id="location"
              name="location"
              placeholder="Add location"
              defaultValue={this.context.user.location}
            /> */}
          </div>
          <div className='form__group'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              id='phone'
              name='phone'
              placeholder='Enter your phone number'
              defaultValue={this.context.user.phone}
            />
          </div>
          <div className='form__group'>
            <label htmlFor='links'>Links</label>
            <input
              type='text'
              id='links'
              name='links'
              placeholder='For example dribbble.com, github.com'
              defaultValue={this.context.user.links}
            />
          </div>
          <Button type='primary'>Update your profile</Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withUser(withRouter(EditProfileHelper));
