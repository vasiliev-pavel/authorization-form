import {
  FETCH_GOOGLE_REQUEST,
  FETCH_GOOGLE_SUCCESS,
  FETCH_GOOGLE_FAILURE,
} from "../constants/signInGoogleConst";

const initialState = {
  signInGoogleRequest: false,
  signInGoogleSuccess: false,
  signInGoogleErrors: null,
};

const signInGoogleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOOGLE_REQUEST:
      return {
        ...state,
        signInGoogleRequest: true,
      };
    case FETCH_GOOGLE_SUCCESS:
      return {
        ...state,
        signInGoogleSuccess: true,
        signInGoogleErrors: null,
      };
    case FETCH_GOOGLE_FAILURE:
      return {
        ...state,
        signInGoogleErrors: action.error,
      };
    default:
      return state;
  }
};

export default signInGoogleReducer;
