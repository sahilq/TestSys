import { fork, takeLatest, all } from "redux-saga/effects";

import * as auth from "./authSaga";
import * as test from "./testSaga";
import * as types from "../actions/types";

//Authentication Watcher Saga
function* authSaga() {
  yield all([
    yield takeLatest(types.SIGN_UP_REQ, auth.signUp),
    yield takeLatest(types.SIGN_IN_REQ, auth.signIn),
    yield takeLatest(types.SIGN_OUT_REQ, auth.signOut)
  ]);
}
//test watcher
function* testSaga() {
  yield all([yield takeLatest(types.TEST_INIT_REQ, test.testInitSaga)]);
}

//Root SAGA
export default function* mySaga() {
  yield all([yield fork(authSaga), yield fork(testSaga)]);
}
