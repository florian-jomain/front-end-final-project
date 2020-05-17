// import { List } from "immutable";
import React, { Component } from "react";
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

export default class CustomTagBox extends Component {
  state = {
    tags: options,
    selected: [],
  };

  onSelect = (tag) => {
    const newTag = {
      label: tag.label,
      value: tag.value || tag.label,
      name: tag.name || tag.label,
    };

    this.state.selected.push(newTag);
  };

  remove = (tag) => {
    this.setState({
      selected: this.state.selected.filter((t) => t.value !== tag.value),
    });
  };

  render() {
    return (
      <TagBox
        tags={this.state.tags}
        selected={this.state.selected}
        onSelect={this.onSelect}
        removeTag={this.remove}
        backspaceDelete={true}
      />
    );
  }
}
