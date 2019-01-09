import React, { Component } from "react";
import api, { parseErr } from "../../../api";
import styled from "styled-components";
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

  handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = data => {
    this.setState({ isSubmitting: true, error: null });

    this.submitForm(data)
      .then(res => {
        console.log(res);
        this.setState({ isSubmitting: false });
      })
      .catch(err => {
        const error = parseErr(err);
        console.error(error);
        this.setState({
          isSubmitting: false,
          error: { status: error.response.status, statusText: error.response.statusText }
        });
      });
  };

  render() {
    const { error, isSubmitting } = this.state;
    console.log(isSubmitting);

    return (
      <main className="pa4 black-80 dt vh-100 w-100">
        <div className="dtc v-mid">
          <SignInPage.FormWrapper className="measure center">
            <SignInForm isSubmitting={isSubmitting} onSubmit={this.handleSubmit} />
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db">
                Sign up
              </a>
              <a href="#0" className="f6 link dim black db">
                Forgot your password?
              </a>
            </div>

            {error && (
              <SignInPage.Message className="message-holder">
                <Message className="error-message" title={`Error ${error.status}`}>
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
