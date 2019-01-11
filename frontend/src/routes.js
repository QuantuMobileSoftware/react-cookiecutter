import React, { Suspense } from "react";
import { Router, Redirect } from "@reach/router";

const SignInPage = React.lazy(() => import("./modules/auth/pages/SignInPage"));
const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const NotFound = () => <div>Not Found</div>;

const restricted = <Home path="/" />;
const shared = [<NotFound key="1" default />, <About key="2" path="about" />];
const auth = <SignInPage path="sign-in" />;

const routes = authorized => (
  <Suspense fallback={<div>Loading...</div>}>
    {!authorized && <Redirect to="sign-in" noThrow />}
    <Router>
      {authorized ? restricted : auth}
      {shared}
    </Router>
  </Suspense>
);

export default routes;
