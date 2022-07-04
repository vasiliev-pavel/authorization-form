import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_EMAIL_REQUEST } from "../constants/signInConst";
import { auth } from "../../../firebase";
import { signInFailure, signInSuccess } from "../actions/signInActions";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userAuthSuccess } from "../actions/operatorAuthAct";
import { toast } from "react-toastify";

const options = {
  hideProgressBar: false,
  closeOnClick: true,
  autoClose: 2000,
  draggable: false,
  progress: undefined,
};

function* signInWithEmail(action) {
  try {
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      action.email,
      action.password
    );
    yield put(signInSuccess());
    yield put(userAuthSuccess(userCredential.user));
    yield action.navigate();
  } catch (error) {
    toast.error(error.code, options);
    yield put(signInFailure(error.code));
  }
}

export default function* signInWatch() {
  yield takeLatest(FETCH_EMAIL_REQUEST, signInWithEmail);
}
