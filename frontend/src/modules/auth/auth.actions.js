import {
  REGISTER,
  LOGIN,
  SOCIAL_LOGIN,
  LOGOUT,
  FETCH_PROFILE,
  UPDATE_PROFILE,
} from './AuthActions';

const initialState = {
  email           : null,
  username        : null,
  token           : null,
  isAuthenticated : false,
  profile         : {},
};