import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import UserContext from '../Auth/UserContext'
import { withUser } from '../../components/Auth/withUser'
import apiHandler from '../../api/apiHandler'
import Button from '../../components/UI/Button'
import LocationAutoComplete from '../LocationAutoComplete'

class FormCreateProfileCharity extends Component {
  static contextType = UserContext

  state = {
    name: '',
    links: [],
    bio: '',
    location: '',
    tempUrl: '',
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
    var formData = new FormData()

    if (this.state.name) {
      formData.append('name', this.state.name)
    }

    if (this.state.image) {
      formData.append('image', this.state.image)
    }

    if (this.state.links) {
      formData.append('links', this.state.links)
    }

    if (this.state.bio) {
      formData.append('bio', this.state.bio)
    }

    if (this.state.location) {
      formData.append('location', this.state.location)
    }

    apiHandler
      .createProfileCharity(formData)
      .then((data) => {
        console.log(data)
        this.context.setUser(data)
        this.props.history.push('/user-profile')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    let imgSrc = null
    if (!this.context.user) {
      this.props.history.push('/')
      return true
    } else if (this.state.tempUrl === '') {
      imgSrc = this.context.user.image
    } else imgSrc = this.state.tempUrl
    return (
      <React.Fragment>
        <div className="input__form">
          <div className="user__image round__image">
            <img src={imgSrc} alt={this.context.user.username} />
          </div>
        </div>

        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label htmlFor="image" className="custom-upload label">
              Upload profile image
            </label>
            <input className="input" type="file" id="image" name="image" />
          </div>

          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter the name of the organization"
              defaultValue={this.context.user.name}
            />
          </div>

          <div className="form__group">
            <label htmlFor="bio">Your Bio</label>
            <textarea
              type="textarea"
              id="bio"
              name="bio"
              placeholder="Write something about your organization"
              defaultValue={this.context.user.bio}
            />
          </div>
          <div className="form__group">
            <label htmlFor="location">Location</label>
            <LocationAutoComplete
              onSelect={this.handlePlace}
              defaultValue={this.context.user.location}
            />
            {/* <input
              type="text"
              id="location"
              name="location"
              placeholder="Add location"
              defaultValue={this.context.user.location}
            /> */}
          </div>

          <div className="form__group">
            <label htmlFor="links">Links</label>
            <input
              type="text"
              id="links"
              name="links"
              placeholder="For example your website"
              defaultValue={this.context.user.links}
            />
          </div>
          <Button type="primary">Update your profile</Button>
        </form>
      </React.Fragment>
    )
  }
}

export default withUser(withRouter(FormCreateProfileCharity))
