import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import UserContext from '../Auth/UserContext'
import apiHandler from '../../api/apiHandler'
import Button from '../../components/UI/Button'

class FormSignupCharity extends Component {
  static contextType = UserContext

  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const value =
      event.target.type === 'file'
        ? event.target.files[0]
        : event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    const key = event.target.name

    this.setState({ [key]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data)
        this.props.history.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <p>Helper</p>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <Button type="primary">Get started!</Button>
        </form>
      </div>
    )
  }
}

export default withRouter(FormSignupCharity)
