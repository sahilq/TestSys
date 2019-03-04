import { put } from "redux-saga/effects";
import axios from "axios";

import * as types from "../actions/types";

const scoreUri = "http://localhost:5000/score";

export function* saveScore(action) {
  yield axios.post(`${scoreUri}/savescore`, action.payload);
}

export function* fetchScores(action) {
  const res = yield axios.get(`${scoreUri}/getscores`);
  yield put({ type: types.FETCH_SCORES_SUCCESS, payload: res.data });
}
