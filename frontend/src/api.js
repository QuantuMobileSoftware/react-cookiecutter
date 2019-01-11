import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default {
  auth: {
    login(data) {
      return axios.post("login", data);
    }
  }
};

// utils

export const handleErr = err => {
  let errorText = "";
  if (err.response) {
    errorText = `[Response failure] ${err.response.status} ${err.response.statusText}`;
  } else if (err.request) {
    errorText = `[Request failure]`;
  } else {
    errorText = `[Error] ${err.message}`;
  }

  return errorText;
};

export const parseErr = err => {
  try {
    const parsedError = JSON.parse(JSON.stringify(err));
    return parsedError;
  } catch (error) {
    return error;
  }
};
