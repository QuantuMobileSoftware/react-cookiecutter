import React, { Suspense } from "react";
import { Router, Redirect } from "@reach/router";

const SignInPage = React.lazy(() => import("./modules/auth/pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./modules/auth/pages/SignUpPage"));
const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const NotFound = () => <div>Not Found</div>;

const restricted = [<Home path="/" />];
const shared = [<NotFound default />, <About path="about" />];
const auth = [
  <Redirect from="/" to="sign-in" />,
  <SignInPage path="sign-in" />,
  <SignUpPage path="sign-up" />
];

const mapLinks = arr => arr.map((item, i) => ({ ...item, key: i }));

const routes = authorized => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      {authorized ? mapLinks(restricted) : mapLinks(auth)}
      {mapLinks(shared)}
    </Router>
  </Suspense>
);

export default routes;
