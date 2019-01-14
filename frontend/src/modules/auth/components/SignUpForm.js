import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SignUpForm extends PureComponent {
  state = {
    name: "",
    password: "",
    email: ""
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
    const { name, email, password } = this.state;
    const { errorMsg, isSubmitting } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="ba b--transparent ph0 mh0">
          <legend className="f3 fw6 ph0 mh0">Sign Up</legend>
          {errorMsg}
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">
              Full name
            </label>
            <input
              className="pa2 input-reset ba bg-transparent w-100"
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={this.handleInputChange}
              required
            />
          </div>
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
        </fieldset>
        <button
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          disabled={isSubmitting}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func
};

export default SignUpForm;
