import storage from "redux-persist/lib/storage";

export default {
  active: true,
  reducerVersion: "1",
  storeConfig: {
    storage,
    key: "primary",
    whitelist: ["auth"]
  }
};
