import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SignInForm extends PureComponent {
  state = {
    password: "",
    email: "",
    remember: false
  };

  handleInputChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  render() {
    const { email, password, remember } = this.state;
    const { isSubmitting, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <fieldset className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent w-100"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
            </label>
            <input
              className="b pa2 input-reset ba bg-transparent w-100"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
              minLength="6"
              maxLength="20"
              required
            />
          </div>
          <label className="pa0 ma0 lh-copy f6 pointer">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={remember}
              onChange={this.handleInputChange}
            />
            Remember me
          </label>
        </fieldset>
        <button
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          disabled={isSubmitting}
          type="submit"
        >
          Sign in
        </button>
      </form>
    );
  }
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func
};

export default SignInForm;
