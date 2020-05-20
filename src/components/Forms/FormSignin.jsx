import React, { Component } from 'react'

import UserContext from '../Auth/UserContext'
import { withRouter } from 'react-router-dom'
import apiHandler from '../../api/apiHandler'
import Button from '../../components/UI/Button'
import ErrorMessageHandler from './ErrorMessageHandler'

class FormSignin extends Component {
  static contextType = UserContext

  state = {
    email: '',
    password: '',
    userType: '',
  }

  handleChange = (event) => {
    const key = event.target.name
    this.setState({ [key]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let errors = { is: false, messages: [] }

    if (!this.state.password) {
      errors.is = true
      errors.messages.push('Enter your password')
    }

    if (!this.state.email) {
      errors.is = true
      errors.messages.push('Enter your email')
    }

    if (errors.is) {
      this.setState({ errors: errors.messages })
    } else {
      apiHandler
        .signin(this.state)
        .then((data) => {
          console.log(data)
          this.context.setUser(data)
          this.props.history.push('/')
        })
        .catch((error) => {
          errors.is = true
          errors.messages.push(error.response.data.message)
          this.setState({ errors: errors.messages })
        })
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.errors && (
          <ErrorMessageHandler messages={this.state.errors} />
        )}
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form__group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <Button type="primary">Let's go!</Button>
        </form>
      </React.Fragment>
    )
  }
}

export default withRouter(FormSignin)
