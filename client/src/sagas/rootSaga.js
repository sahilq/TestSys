import { fork, takeLatest, all } from "redux-saga/effects";

import * as auth from "./authSaga";
import * as types from "../actions/types";

//Authentication Watcher Saga
function* authSaga() {
  yield all([
    yield takeLatest(types.SIGN_UP_REQ, auth.signUp),
    yield takeLatest(types.SIGN_IN_REQ, auth.signIn),
    yield takeLatest(types.SIGN_OUT_REQ, auth.signOut)
  ]);
}
//Post and Comments watcher saga

//Root SAGA
export default function* mySaga() {
  yield all([yield fork(authSaga)]);
}
