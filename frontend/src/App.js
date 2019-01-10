import React, { Component } from "react";
import routes from "./routes";
import "tachyons";
import "./App.css";

class App extends Component {
  state = {
    autorized: false
  };

  render() {
    const { autorized } = this.state;
    return <div className="App">{routes(autorized)}</div>;
  }
}

export default App;
