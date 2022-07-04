import {
  FETCH_SIGNUP_FAILURE,
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
} from "../constants/signUpConst";

export const signUpRequest = ({ email, password }, navigate) => {
  return {
    type: FETCH_SIGNUP_REQUEST,
    email,
    password,
    navigate,
  };
};

export const signUpSuccess = () => {
  return {
    type: FETCH_SIGNUP_SUCCESS,
  };
};

export const signUpFailure = (error) => {
  return {
    type: FETCH_SIGNUP_FAILURE,
    error,
  };
};
