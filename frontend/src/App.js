import React, { Component } from "react";
import Routes from "./routes";
import "tachyons";
import "./style.scss";

class App extends Component {
  state = {
    autorized: false
  };

  render() {
    const { autorized } = this.state;
    return (
      <div className="App">
        <Routes authorized={autorized} />
      </div>
    );
  }
}

export default App;
