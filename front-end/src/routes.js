import React, { Suspense } from "react";
import { Router } from "@reach/router";
const SignIn = React.lazy(() => import("./views/SignIn"));

const Home = () => <div>Home</div>;

export default (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <SignIn path="sign-in" />

      <Home path="/" />
    </Router>
  </Suspense>
);
