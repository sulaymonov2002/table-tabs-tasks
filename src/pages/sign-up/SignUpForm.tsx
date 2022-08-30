import React, { Component } from "react";
import "./signUp.scss";

const endPoint = process.env.REACT_APP_BASE_URL + "/auth/sign-up";

class SignUp extends Component {
  handleChange = (event: any) => {};

  handleSubmit = (event: any) => {};

  render(): React.ReactNode {
    return (
      <div className="wrapper-sign">
        <div className="sign-up-title">
          <h1>codingBat</h1>
          <div className="form-wrapper">
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="email">
                <fieldset>
                  <legend>
                    <label htmlFor="email"> Email </label>
                  </legend>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
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
    );
  }
}

export default SignUp;
