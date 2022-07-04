import { takeLatest, call, put } from "redux-saga/effects";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signUpFailure, signUpSuccess } from "../actions/signUpActions";
import { FETCH_SIGNUP_REQUEST } from "../constants/signUpConst";
import { userAuthSuccess } from "../actions/operatorAuthAct";
import { toast } from "react-toastify";

const options = {
  hideProgressBar: false,
  closeOnClick: true,
  autoClose: 2000,
  draggable: false,
  progress: undefined,
};

function* signUpWithEmail(action) {
  try {
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      action.email,
      action.password
    );
    yield put(signUpSuccess());
    yield put(userAuthSuccess(userCredential.user));
    yield action.navigate();
  } catch (error) {
    toast.error(error.code, options);
    yield put(signUpFailure(error.code));
  }
}

export default function* signUpWatch() {
  yield takeLatest(FETCH_SIGNUP_REQUEST, signUpWithEmail);
}
