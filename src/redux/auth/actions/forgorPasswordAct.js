import {
  SEND_EMAIL_FAILURE,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
} from "../constants/forgotPasswordConst";

export const sendEmailRequest = (email, navigate) => {
  return {
    type: SEND_EMAIL_REQUEST,
    email,
    navigate,
  };
};

export const sendEmailSuccess = () => {
  return {
    type: SEND_EMAIL_SUCCESS,
  };
};

export const sendEmailFailure = (error) => {
  return {
    type: SEND_EMAIL_FAILURE,
    error,
  };
};
