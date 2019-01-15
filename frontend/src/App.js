import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "tachyons";

import configureStore from "./store/configureStore";
import Routes from "./routes";
import "./style.scss";

const { store, persistor } = configureStore();

class App extends Component {
  state = {
    autorized: false
  };

  render() {
    const { autorized } = this.state;
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes authorized={autorized} />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
