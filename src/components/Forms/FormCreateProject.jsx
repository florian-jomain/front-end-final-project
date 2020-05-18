import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import Button from "../../components/UI/Button";
import { TagBox } from "react-tag-box";

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

class FormCreateProject extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
    tags: options,
    selected: [],
  };

  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .createProject(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
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

    this.setState({
      selected: tagsArray,
    });
  };

  remove = (tag) => {
    this.setState({
      selected: this.state.selected.filter((t) => t.value !== tag.value),
    });
  };

  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className='form__group'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' />
          </div>
          <div className='form__group'>
            <label htmlFor='image'>Image</label>
            <input type='file' id='image' name='image' />
          </div>
          <div className='form__group'>
            <label htmlFor='description'>Description</label>
            <input type='text' id='description' name='description' />
          </div>
          <div className='form__group'>
            <label htmlFor='category'>Category</label>
            <select name='category'>
              <option value='Covid-19'>Covid-19</option>
              <option value='Education'>Education</option>
              <option value='Arts'>Arts</option>
              <option value='Animals'>Animals</option>
              <option value='Environment'>Environment</option>
              <option value='Poverty'>Poverty</option>
              <option value='Equality'>Equality</option>
            </select>
          </div>
          <div className='form__group'>
            <label htmlFor='skills'>Your skills</label>
            <TagBox
              tags={this.state.tags}
              selected={this.state.selected}
              onSelect={this.onSelect}
              removeTag={this.remove}
              backspaceDelete={true}
            />
          </div>
          <div className='form__group'>
            <label htmlFor='location'>Location</label>
            <input type='text' id='location' name='location' />
          </div>
          <div className='form__group'>
            <label htmlFor='frequency'>Frequency</label>
            <select name='frequency'>
              <option value='Regular'>Regular</option>
              <option value='Temporary'>Temporary</option>
            </select>
          </div>
          <div className='form__group'>
            <label htmlFor='status'>Status</label>
            <select name='status'>
              <option value='Full'>Full</option>
              <option value='Open'>Open</option>
              <option value='Completed'>Completed</option>
            </select>
          </div>
          <Button type='primary'>Get started!</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(FormCreateProject);
