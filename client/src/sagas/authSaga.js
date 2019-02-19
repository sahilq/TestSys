import { call } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/actionCreators";

const userUri = "http://localhost:5000/user";

//Save auth info to local Storage
function* svAuthInfo(data) {
  yield localStorage.setItem("JWT_TOKEN", data.token);
  yield localStorage.setItem("USER", JSON.stringify(data.user));
  yield (axios.defaults.headers.common["Authorization"] = data.token);
}

//Remove auth info from Local Storage
function* rmAuthInfo() {
  yield localStorage.removeItem("JWT_TOKEN");
  yield localStorage.removeItem("USER");
}

//Sign Up
export function* signUp(action) {
  try {
    if (action.payload.role === "") {
      action.payload.role = "participant";
    }
    const res = yield call(axios.post, userUri + "/signup", action.payload);
    yield call(svAuthInfo, res.data);
  } catch (e) {
    yield call(actions.authError);
    console.error(e);
  }
}

//Sign In
export function* signIn(action) {
  console.log("auth sign in ", action.payload);
  try {
    const res = yield call(axios.post, userUri + "/signin", action.payload);
    yield call(svAuthInfo, res.data);
    yield call(actions.signInSuccess, res.data);
  } catch (e) {
    yield call(actions.authError);
    console.error(e);
  }
}

//Sign OUT
export function* signOut() {
  try {
    yield call(rmAuthInfo);
    yield call(actions.signOut);
    yield (axios.defaults.headers.common["Authorization"] = "");
  } catch (e) {
    console.error("err", e);
  }
}
