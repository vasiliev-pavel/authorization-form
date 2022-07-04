import { USER_AUTH_SUCCESS, USER_LOGOUT } from "../constants/operatorConst";

export const userAuthSuccess = (user) => {
  return {
    type: USER_AUTH_SUCCESS,
    user,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
