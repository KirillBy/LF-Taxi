import { logIn } from "../actions/login";
import { ADD_USER } from "../actions/user";
import { serverRegistration} from "../api/api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* registrationSaga(action) {
  const { email, name, surname, password } = action.payload;
  const success = yield call(serverRegistration, email, password, name, surname);
  if (success) {
    console.log("success")
    yield put(logIn());
  } else {
    console.log("No success")
  }
}

export function* regSaga() {
  yield takeEvery(ADD_USER, registrationSaga);
}