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

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { email, password, remember } = this.state;
    const { errorMsg, isSubmitting } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="ba b--transparent ph0 mh0">
          <legend className="f3 fw6 ph0 mh0">Sign In</legend>
          {errorMsg}
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
              className="mr2"
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
