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
    username: '',
    userType: 'charity',
  }

  handleChange = (event) => {
    const key = event.target.name
    this.setState({ [key]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    apiHandler
      .signupCharity(this.state)
      .then((data) => {
        this.context.setUser(data)
        this.props.history.push('/charities/edit/' + data.username)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label htmlFor="username">Username</label>
            <input type="username" id="username" name="username" />
          </div>

          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form__group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <Button type="primary">Get started!</Button>
        </form>
      </div>
    )
  }
}

export default withRouter(FormSignupCharity)
