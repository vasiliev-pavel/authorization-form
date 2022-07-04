import { takeLatest, call, put } from "redux-saga/effects";
import { signInWithPopup } from "firebase/auth";
import { FETCH_GOOGLE_REQUEST } from "../constants/signInGoogleConst";
import { auth, googleProvider } from "../../../firebase";
import { userAuthSuccess } from "../actions/operatorAuthAct";
import {
  signInGoogleFailure,
  signInGoogleSuccess,
} from "../actions/signInGoogleAct";
import { toast } from "react-toastify";

const options = {
  hideProgressBar: false,
  closeOnClick: true,
  autoClose: 2000,
  draggable: false,
  progress: undefined,
};

function* signInWithGoogle(action) {
  try {
    const userCredential = yield call(signInWithPopup, auth, googleProvider);
    yield put(signInGoogleSuccess());
    yield put(userAuthSuccess(userCredential.user));
    yield action.navigate();
  } catch (error) {
    toast.error(error.code, options);
    yield put(signInGoogleFailure(error.code));
  }
}

export default function* signInGoogleWatch() {
  yield takeLatest(FETCH_GOOGLE_REQUEST, signInWithGoogle);
}
