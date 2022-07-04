import { call, put, takeLatest } from "redux-saga/effects";
import { SEND_EMAIL_REQUEST } from "../constants/forgotPasswordConst";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
import {
  sendEmailFailure,
  sendEmailSuccess,
} from "../actions/forgorPasswordAct";
import { toast } from "react-toastify";

const options = {
  hideProgressBar: false,
  closeOnClick: true,
  autoClose: 1500,
  draggable: false,
  progress: undefined,
};

function* sendEmailForgotPassword(action) {
  try {
    yield call(sendPasswordResetEmail, auth, action.email);
    yield put(sendEmailSuccess());
    toast.success("The message has been sent.", options);
    action.navigate();
  } catch (error) {
    toast.error(error.code, options);
    yield put(sendEmailFailure(error.code));
  }
}

export default function* forgotPasswordWatch() {
  yield takeLatest(SEND_EMAIL_REQUEST, sendEmailForgotPassword);
}
