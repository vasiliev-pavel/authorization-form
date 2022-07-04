import { call, put, takeLatest } from "redux-saga/effects";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../../../firebase";

import { toast } from "react-toastify";
import {
  updatePasswordFailure,
  updatePasswordSuccess,
} from "../actions/updatePasswordAct";
import { UPDATE_PASSWORD_REQUEST } from "../constants/updatePasswordConst";

const options = {
  hideProgressBar: false,
  closeOnClick: true,
  autoClose: 2000,
  draggable: false,
  progress: undefined,
};

function* resetPassword(action) {
  try {
    yield call(confirmPasswordReset, auth, action.oobCode, action.newPassword);
    yield put(updatePasswordSuccess());
    toast.success("The password has been changed, now you can log in", options);
    action.navigate();
  } catch (error) {
    toast.error(error.code, options);
    yield put(updatePasswordFailure(error.code));
  }
}

export default function* updatePasswordWatch() {
  yield takeLatest(UPDATE_PASSWORD_REQUEST, resetPassword);
}
