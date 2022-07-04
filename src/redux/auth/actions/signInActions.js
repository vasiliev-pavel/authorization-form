import {
  FETCH_EMAIL_FAILURE,
  FETCH_EMAIL_REQUEST,
  FETCH_EMAIL_SUCCESS,
} from "../constants/signInConst";

export const signInRequest = ({ email, password }, navigate) => {
  return {
    type: FETCH_EMAIL_REQUEST,
    email,
    password,
    navigate,
  };
};

export const signInSuccess = () => {
  return {
    type: FETCH_EMAIL_SUCCESS,
  };
};

export const signInFailure = (error) => {
  return {
    type: FETCH_EMAIL_FAILURE,
    error,
  };
};
