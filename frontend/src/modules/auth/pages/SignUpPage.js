import React, { Component } from "react";
import api, { parseErr } from "../../../api";
import styled from "styled-components";
import { Link } from "@reach/router";
import SignUpForm from "../components/SignUpForm";
import Message from "../../../components/Message";

class SignInPage extends Component {
  state = {
    isSubmitting: false,
    error: null
  };

  async submitForm(data) {
    const response = await api.auth.register(data);
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
            status: error.response.status,
            statusText: error.response.statusText
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
          <SignInPage.FormWrapper className="measure center">
            <SignUpForm isSubmitting={isSubmitting} onSubmit={this.handleSubmit} />
            <div className="f6 lh-copy mt3">
              Have an account?{" "}
              <Link className="dim black" to="/sign-in">
                Sign in
              </Link>
            </div>

            {error && (
              <SignInPage.Message className="message-holder">
                <Message
                  className="error-message"
                  title={`Error ${error.status}`}
                  onClose={this.handleMessageClose}
                >
                  {error.statusText}
                </Message>
              </SignInPage.Message>
            )}
          </SignInPage.FormWrapper>
        </div>
      </main>
    );
  }
}

SignInPage.FormWrapper = styled.div`
  position: relative;
`;

SignInPage.Message = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
`;

export default SignInPage;
