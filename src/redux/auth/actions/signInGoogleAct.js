import {
  FETCH_GOOGLE_REQUEST,
  FETCH_GOOGLE_SUCCESS,
  FETCH_GOOGLE_FAILURE,
} from "../constants/signInGoogleConst";

export const signInGoogleRequest = (navigate) => {
  return {
    type: FETCH_GOOGLE_REQUEST,
    navigate,
  };
};

export const signInGoogleSuccess = () => {
  return {
    type: FETCH_GOOGLE_SUCCESS,
  };
};

export const signInGoogleFailure = (error) => {
  return {
    type: FETCH_GOOGLE_FAILURE,
    error,
  };
};
