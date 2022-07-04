import {
  FETCH_EMAIL_FAILURE,
  FETCH_EMAIL_REQUEST,
  FETCH_EMAIL_SUCCESS,
} from "../constants/signInConstants";

const initialState = {
  requesting: false,
  successful: false,
  errors: null,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAIL_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_EMAIL_SUCCESS:
      return {
        ...state,
        successful: true,
      };
    case FETCH_EMAIL_FAILURE:
      return {
        ...state,
        errors: action.error,
      };

    default:
      return state;
  }
};

export default signInReducer;
