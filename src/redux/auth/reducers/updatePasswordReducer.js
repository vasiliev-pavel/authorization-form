import {
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
} from "../constants/updatePasswordConst";

const initialState = {
  updateSuccess: false,
  updateErrors: null,
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_SUCCESS:
      return { ...state, updateSuccess: true, updateErrors: null };
    case UPDATE_PASSWORD_FAILURE:
      return { ...state, updateErrors: action.error };
    default:
      return state;
  }
};
export default passwordReducer;
