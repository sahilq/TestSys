import { fork, takeLatest, all } from "redux-saga/effects";

import * as auth from "./authSaga";
import * as test from "./testSaga";
import * as types from "../actions/types";

//Authentication Watcher Saga
function* authSaga() {
  yield all([
    yield takeLatest(types.SIGN_UP_REQ, auth.signUp),
    yield takeLatest(types.SIGN_IN_REQ, auth.signIn),
    yield takeLatest(types.SIGN_OUT_REQ, auth.signOut),
    yield takeLatest(types.GET_PARTICIPANTS, auth.getPartsSaga)
  ]);
}
//test watcher
function* testSaga() {
  yield all([
    yield takeLatest(types.TEST_INIT_REQ, test.testInitSaga),
    yield takeLatest(types.FETCHALL_TEST, test.fetchTestsSaga),

    yield takeLatest(types.GET_TEST, test.getTestSaga),
    yield takeLatest(types.DELETE_TEST, test.deleteTestSaga),
    yield takeLatest(types.TEST_EDIT_REQ, test.editTestSaga),
    yield takeLatest(types.ADD_QUE_REQ, test.addQueSaga),
    yield takeLatest(types.DEL_QUE_REQ, test.deletQueSaga)
  ]);
}

//Root SAGA
export default function* mySaga() {
  yield all([yield fork(authSaga), yield fork(testSaga)]);
}
