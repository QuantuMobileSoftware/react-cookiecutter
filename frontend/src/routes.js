import React, { Suspense } from "react";
import { Router, Redirect } from "@reach/router";

const SignInPage = React.lazy(() => import("./modules/auth/pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./modules/auth/pages/SignUpPage"));
const NotFoundPage = React.lazy(() => import("./modules/landing/pages/NotFoundPage"));
const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

const Routes = ({ authorized }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <RoutesContainer show={authorized}>
      <Home path="/" />
      <NotFoundPage default />
    </RoutesContainer>

    <RoutesContainer show={!authorized}>
      <Redirect from="/" to="sign-in" noThrow />
      <SignInPage path="sign-in" />
      <SignUpPage path="sign-up" />
      <NotFoundPage default />
    </RoutesContainer>

    <RoutesContainer>
      <About path="about" />
    </RoutesContainer>
  </Suspense>
);

const RoutesContainer = ({ show = true, children }) => (show ? <Router>{children}</Router> : null);

export default Routes;
