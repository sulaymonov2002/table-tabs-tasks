import axios from 'axios'
import React, { Component } from 'react'
import './sign-up.scss'
import { Schema } from '../../services/user-validation'

const endPoint = process.env.REACT_APP_BASE_URL + '/auth/sign-up'

class SignUp extends Component {
  readonly state = {
    data: {
      email: '',
      password: '',
    },
  }

  handleChange = (e: any) => {
    const { name, value } = e.target
    const { data } = this.state
    this.setState({ data: { ...data, [name]: value } })
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    const data = { ...this.state.data }
    axios.post(endPoint, data)
  }

  render(): React.ReactNode {
    const { email, password } = this.state.data
    return (
      <div className="wrapper-sign">
        <div className="sign-up-title">
          <h1>codingBat</h1>
          <div className="form-wrapper">
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="email">
                <fieldset>
                  <legend>
                    <label htmlFor="email"> Email </label>
                  </legend>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                  />
                </fieldset>
              </div>
              <div className="password">
                <fieldset>
                  <legend>
                    <label htmlFor="password">Password</label>
                  </legend>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={password}
                  />
                </fieldset>
              </div>
              <div className="submit">
                <button>Register Me</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
