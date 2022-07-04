import { combineReducers } from "redux";

import signInReducer from "./signInReducer";
import signUpReducer from "./signUpReducer";
import signInGoogleReducer from "./signInGoogleReduser";
import operatorReducer from "./operatorReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import updatePasswordReducer from "./updatePasswordReducer";

const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  signInGoogle: signInGoogleReducer,
  operator: operatorReducer,
  forgotPassword: forgotPasswordReducer,
  updatePassword: updatePasswordReducer,
});
export default rootReducer;
