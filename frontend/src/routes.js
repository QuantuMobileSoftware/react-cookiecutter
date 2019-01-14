import React, { Suspense } from "react";
import { Router } from "@reach/router";

const SignInPage = React.lazy(() => import("./modules/auth/pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./modules/auth/pages/SignUpPage"));
const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const NotFound = () => <div>Not Found</div>;

const restricted = <Home path="/" />;
const shared = [<NotFound key="1" default />, <About key="2" path="about" />];
const auth = [<SignInPage key="1" path="sign-in" />, <SignUpPage key="2" path="sign-up" />];

const routes = authorized => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      {authorized ? restricted : auth}
      {shared}
    </Router>
  </Suspense>
);

export default routes;
