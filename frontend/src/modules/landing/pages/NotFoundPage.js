import React, { Component } from "react";

class NotFoundPage extends Component {
  render() {
    return (
      <main className="pa4 black-80 dt vh-100 w-100">
        <section className="dtc v-mid">
          <header className="tc ph5 lh-copy">
            <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
            <h2 className="tc f1-l fw1">Page not found</h2>
          </header>
        </section>
      </main>
    );
  }
}

export default NotFoundPage;
