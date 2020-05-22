import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import UserContext from '../Auth/UserContext'
import apiHandler from '../../api/apiHandler'
import Button from '../../components/UI/Button'
import { TagBox } from 'react-tag-box'
import ErrorMessageHandler from './ErrorMessageHandler'
import LocationAutoComplete from '../LocationAutoComplete'

const options = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Ruby',
  'Rails',
  'MySQL',
  'NoSQL',
  'PHP',
  'Python',
  'C',
  'C++',
  'TypeScript',
  'Vue.js',
  'Angular',
  'Java',
  'Docker',
  'Azure',
  'React Native',
  'Swift',
  'Redux',
  'GraphQL',
  'Android',
  'Fullstack',
  'Bootstrap',
  'Spring',
  'PostgreSQL',
  'Agile methodology',
  'jhipster',
  'Heroku',
  'Netlify',
  'Wordpress',
  'Ionic',
  'Firebase',
  'Meteor.js',
  'API',
  'Django',
  'Git',
  'Symfony',
  'Scrum',
  'Laravel',
  'Semantic UI',
  'jQuery',
  'Figma',
  'Sketch',
  'InVision',
  'Zeplin',
  'Adobe Photoshop',
  'Adobe InDesign',
  'Adobe Illustrator',
  'Product Design',
  'User Testing',
  'UI Design',
  'UX Design',
  'Design Thinking',
  'Service Design',
  'Logo Design',
  'Graphic Design',
  'Print Design',
  'Workshops',
  'Wireframing',
  'Webdesign',
  'Artistic Direction',
  'Mobile Design',
  'Project Management',
  'Reporting',
  'Data analytics',
  'Web analytics',
  'Product Management',
  'Design Sprint',
  'E-commerce',
  'Go',
].map((option) => ({
  label: option.toLowerCase(),
  value: option.toLowerCase(),
  name: option.toLowerCase(),
}))

let tagsArray = []
let skillsArray = []

class FormCreateProject extends Component {
  static contextType = UserContext

  state = {
    email: '',
    password: '',
    tags: options,
    selected: [],
    skills: [],
    category: '',
    frequency: '',
    status: '',
    image: '',
    description: '',
    title: '',
    tempUrl: '../../media/avatar-project.png',
  }

  handleChange = (event) => {
    let key = event.target.name
    switch (event.target.type) {
      case 'file':
        this.setState({
          tempUrl: URL.createObjectURL(event.target.files[0]),
          image: event.target.files[0],
        })
        break
      case 'checkbox':
        this.setState({ [key]: event.target.checked })
        break
      default:
        this.setState({ [key]: event.target.value })
    }
  }

  handlePlace = (place) => {
    this.setState({ location: place.place_name })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let errors = { is: false, messages: [] }

    if (!this.state.title) {
      errors.is = true
      errors.messages.push('You need a title for your project')
    }
    if (!this.state.description) {
      errors.is = true
      errors.messages.push('You need a description for your project')
    }

    if (errors.is) {
      this.setState({ errors: errors.messages })
    } else {
      var formData = new FormData()
      formData.append('image', this.state.image)
      formData.append('title', this.state.title)
      formData.append('description', this.state.description)
      formData.append('skills', this.state.skills)
      formData.append('location', this.state.location)

      this.state.category
        ? formData.append('category', this.state.category)
        : formData.append('category', 'Covid-19')
      this.state.frequency
        ? formData.append('frequency', this.state.frequency)
        : formData.append('frequency', 'Regular')
      this.state.status
        ? formData.append('status', this.state.status)
        : formData.append('status', 'Open')

      apiHandler
        .createProject(formData)
        .then((data) => {
          this.props.history.push('/user-profile')
        })
        .catch((error) => {
          errors.is = true
          errors.messages.push(error.response.data.message)
          this.setState({ errors: errors.messages })
        })
    }
  }

  onSelect = (tag) => {
    const newTag = {
      label: tag.label,
      value: tag.value || tag.label,
      name: tag.name || tag.label,
    }
    tagsArray.push(newTag)
    skillsArray.push(tag.name)

    this.setState({
      selected: tagsArray,
      skills: skillsArray,
    })
  }

  remove = (tag) => {
    this.setState({
      selected: this.state.selected.filter((t) => t.value !== tag.value),
    })
  }

  render() {
    let imgSrc = '../../media/avatar-project.png'
    if (!this.context.user) {
      this.props.history.push('/')
      return true
    } else if (this.state.tempUrl === '') {
      imgSrc = null
    } else imgSrc = this.state.tempUrl
    return (
      <div>
        {this.state.errors && (
          <ErrorMessageHandler messages={this.state.errors} />
        )}
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="user__image round__image">
            <img src={imgSrc} alt="project" />
          </div>

          <div className="form__group">
            <label htmlFor="image" className="custom-upload label">
              Upload project image
            </label>
            <input className="input" type="file" id="image" name="image" />
          </div>

          <div className="form__group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter project name"
            />
          </div>

          <div className="form__group">
            <label htmlFor="description">Description</label>
            <textarea
              type="textarea"
              id="description"
              name="description"
              placeholder="Write something about this project"
            />
          </div>
          <div className="form__group">
            <label htmlFor="category">Category</label>
            <select name="category">
              <option value="Covid-19">Covid-19</option>
              <option value="Education">Education</option>
              <option value="Arts">Arts</option>
              <option value="Animals">Animals</option>
              <option value="Environment">Environment</option>
              <option value="Poverty">Poverty</option>
              <option value="Equality">Equality</option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="skills">Requested skills</label>
            <TagBox
              tags={this.state.tags}
              selected={this.state.selected}
              onSelect={this.onSelect}
              removeTag={this.remove}
              backspaceDelete={true}
              placeholder="What skills do you need?"
            />
            <div className="checkbox">
              <input
                onChange={this.handleChange}
                type="checkbox"
                name="DontKnow"
              ></input>
              <label htmlFor="DontKnow">
                I don't know what skills I need for my project
              </label>
            </div>
          </div>
          <div className="form__group">
            <label htmlFor="location">Location</label>
            <LocationAutoComplete onSelect={this.handlePlace} />
          </div>
          <div className="form__group">
            <label htmlFor="frequency">Frequency</label>
            <select name="frequency">
              <option value="Regular">Regular</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
          {/* <div className="form__group">
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="Full">Full</option>
              <option value="Open">Open</option>
              <option value="Completed">Completed</option>
            </select>
          </div> */}
          <Button type="primary">Create project</Button>
        </form>
      </div>
    )
  }
}

export default withRouter(FormCreateProject)
