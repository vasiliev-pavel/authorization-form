import {
  FETCH_EMAIL_FAILURE,
  FETCH_EMAIL_REQUEST,
  FETCH_EMAIL_SUCCESS,
} from "../constants/signInConst";

const initialState = {
  signInRequest: false,
  signInSuccess: false,
  signInErrors: null,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAIL_REQUEST:
      return {
        ...state,
        signInRequest: true,
      };
    case FETCH_EMAIL_SUCCESS:
      return {
        ...state,
        signInSuccess: true,
        signInErrors: null,
      };
    case FETCH_EMAIL_FAILURE:
      return {
        ...state,
        signInErrors: action.error,
      };
    default:
      return state;
  }
};

export default signInReducer;
