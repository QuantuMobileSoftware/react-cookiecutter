import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import persistConfig from "../config/ReduxPersist";
import rootReducer from "./rootReducer";

export default () => {
  const persistedReducer = persistReducer(persistConfig.storeConfig, rootReducer);

  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return { persistor, store };
};
