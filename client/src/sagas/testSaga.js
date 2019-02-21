import { call, put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/actionCreators";
import * as types from "../actions/types";

const testUri = "http://localhost:5000/test";

export function* testInitSaga(action) {
  try {
    const res = yield call(axios.post, testUri + "/addtest", action.payload);

    yield localStorage.setItem("TEST_ID", res.data._id);
    yield call(actions.testInitSuccess, res.data);
  } catch (err) {
    console.error(err);
  }
}

export function* fetchTestsSaga() {
  try {
    const res = yield call(axios.get, testUri + "/gettests");
    yield put({ type: types.FETCH_ALL_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
}

export function* getTestSaga(action) {
  const res = yield call(axios.get, `${testUri}/gettest/${action.id}`);
  yield put({ type: types.GET_TEST_SUCCESS, data: res.data });
  let payload = { testActive: true, testId: action.id };
  yield put({ type: types.TEST_INIT_SUCCESS, payload });
}

export function* deleteTestSaga(action) {
  yield call(axios.delete, `${testUri}/deletetest/${action.payload}`);
}

export function* editTestSaga(action) {
  const res = yield call(
    axios.patch,
    `${testUri}/gettest/${action.id}`,
    action.data
  );
  yield put({ type: types.TEST_EDIT_SUCCESS, payload: res.data });
}

export function* addQueSaga(action) {
  const res = yield axios.patch(
    "http://localhost:5000/test/addque/" + action.payload.id,
    action.payload.question
  );
  yield put({ type: types.TEST_EDIT_SUCCESS, payload: res.data });
}

export function* deletQueSaga(action) {
  console.log(action);
  let id = action.payload.id;
  const res = yield axios.patch(
    "http://localhost:5000/test/deleteque/" + action.payload.testId,
    { id }
  );
  yield put({ type: types.TEST_EDIT_SUCCESS, payload: res.data });
}
