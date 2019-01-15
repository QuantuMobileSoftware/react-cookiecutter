import { SET_USER, LOGOUT } from "./auth.actions";

export const STATE_KEY = "auth";

const initialState = {
  token: null,
  isAuthenticated: false,
  profile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const data = action.payload;
      console.log(data);
      return { ...state, ...data };
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
