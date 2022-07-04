import {
  FETCH_SIGNUP_FAILURE,
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
} from "../constants/signUpConst";

const initialState = {
  signUpRequest: false,
  signUpSuccess: false,
  signUpErrors: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIGNUP_REQUEST:
      return {
        ...state,
        signUpRequest: true,
      };
    case FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        signUpSuccess: true,
        signUpErrors: null,
      };
    case FETCH_SIGNUP_FAILURE:
      return {
        ...state,
        signUpErrors: action.error,
      };

    default:
      return state;
  }
};

export default signUpReducer;
