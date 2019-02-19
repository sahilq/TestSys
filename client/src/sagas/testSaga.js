import { call } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/actionCreators";

const testUri = "http://localhost:5000/test";

export function* testInitSaga(action) {
  try {
    const res = yield call(axios.post, testUri + "/addtest", action.payload);
    console.log(res.data);
    yield localStorage.setItem("TEST_ID", res.data._id);
    yield call(actions.testInitSuccess, res.data);
  } catch (err) {
    console.error(err);
  }
}
