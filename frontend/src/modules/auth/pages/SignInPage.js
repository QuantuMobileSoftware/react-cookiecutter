import React, { Component } from "react";
import api, { parseErr } from "../../../api";
import { Link } from "@reach/router";
import SignInForm from "../components/SignInForm";
import Message from "../../../components/Message";

class SignInPage extends Component {
  state = {
    isSubmitting: false,
    error: null
  };

  async submitForm(data) {
    const response = await api.auth.login(data);
    return response;
  }

  handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = data => {
    this.setState({ isSubmitting: true, error: null });

    this.submitForm(data)
      .then(res => {
        this.setState({ isSubmitting: false });
        console.log(res);
      })
      .catch(err => {
        const error = parseErr(err);
        this.setState({
          isSubmitting: false,
          error: {
            status: error.response.statusText,
            data: error.response.data
          }
        });
        console.error(error);
      });
  };

  handleMessageClose = () => {
    this.setState({ error: null });
  };

  render() {
    const { error, isSubmitting } = this.state;

    return (
      <main className="pa4 black-80 dt vh-100 w-100">
        <div className="dtc v-mid">
          <div className="measure center">
            <SignInForm
              isSubmitting={isSubmitting}
              onSubmit={this.handleSubmit}
              errorMsg={
                error && (
                  <Message
                    className="error-message"
                    title={error.status}
                    onClose={this.handleMessageClose}
                  >
                    {error.data}
                  </Message>
                )
              }
            />
            <div className="f6 lh-copy mt3">
              <Link className="dim black" to="/sign-up">
                Sign up
              </Link>
              <Link className="dim black db" to="/restore-password">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default SignInPage;
