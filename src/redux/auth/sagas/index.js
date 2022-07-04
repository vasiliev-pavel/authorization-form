import signInWatch from "./signInSaga";
import { all } from "redux-saga/effects";
import signUpWatch from "./signUpSaga";
import signInGoogleWatch from "./signInGoogleSaga";
import forgotPasswordWatch from "./forgotPasswordSaga";
import updatePasswordWatch from "./updatePasswordSaga";
export default function* rootSaga() {
  yield all([
    signInWatch(),
    signUpWatch(),
    signInGoogleWatch(),
    forgotPasswordWatch(),
    updatePasswordWatch(),
  ]);
}
