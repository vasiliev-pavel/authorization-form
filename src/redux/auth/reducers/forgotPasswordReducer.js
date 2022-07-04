import {
  SEND_EMAIL_FAILURE,
  SEND_EMAIL_SUCCESS,
} from "../constants/forgotPasswordConst";

const initialState = {
  sendSuccess: false,
  sendErrors: null,
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_EMAIL_SUCCESS:
      return { ...state, sendSuccess: true, sendErrors: null };
    case SEND_EMAIL_FAILURE:
      return { ...state, sendErrors: action.error };
    default:
      return state;
  }
};
export default passwordReducer;
