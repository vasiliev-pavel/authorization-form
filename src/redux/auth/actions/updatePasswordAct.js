import {
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
} from "../constants/updatePasswordConst";

export const updatePasswordRequest = (newPassword, oobCode, navigate) => {
  return {
    type: UPDATE_PASSWORD_REQUEST,
    newPassword,
    oobCode,
    navigate,
  };
};

export const updatePasswordSuccess = () => {
  return {
    type: UPDATE_PASSWORD_SUCCESS,
  };
};

export const updatePasswordFailure = (error) => {
  return {
    type: UPDATE_PASSWORD_FAILURE,
    error,
  };
};
