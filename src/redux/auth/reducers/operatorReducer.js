import { USER_AUTH_SUCCESS, USER_LOGOUT } from "../constants/operatorConst";

const initialState = {
  user: null,
  isAuth: false,
};

const operatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default operatorReducer;
