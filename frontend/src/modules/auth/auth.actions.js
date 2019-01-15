const namespace = "AUTH";
export const SET_USER = `${namespace}_SET_USER`;
export const LOGOUT = `${namespace}_LOGOUT`;

export const set_user = (payload = {}) => ({
  type: SET_USER,
  payload
});

export const logout = () => ({
  type: LOGOUT
});
