import { put } from "redux-saga/effects";
import axios from "axios";

import * as types from "../actions/types";

const inviteUri = "http://localhost:5000/invite";

export function* createInvSaga(action) {
  try {
    const res = yield axios.post(`${inviteUri}/createinvite`, action.payload);
    console.log(res.data);
    yield put({ type: types.INVITE_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
}

export function* getInvSaga(action) {
  try {
    const res = yield axios.get(
      "http://localhost:5000/invite/getinvites/" + action.payload
    );

    yield put({ type: types.INVITE_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
}
