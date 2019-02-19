import { put } from "redux-saga/effects";

import * as types from "./types";

//Auth Requests
export function signInReq(data) {
  return {
    type: types.SIGN_IN_REQ,
    payload: data
  };
}
//SIGN UP REQUEST
export function signUpReq(data) {
  console.log(data);
  return {
    type: types.SIGN_UP_REQ,
    payload: data
  };
}
//SIGN OUT REQ
export function signOutReq() {
  return { type: types.SIGN_OUT_REQ };
}

//SUCCESS
//AUTH SUCCESS
//SIGN UP SUCCESS
export function* signUpSuccess(data) {
  yield put({ type: types.SIGN_UP_SUCCESS, payload: data });
}
//SIGN IN SUCCESS
export function* signInSuccess(data) {
  yield put({ type: types.SIGN_IN_SUCCESS, payload: data });
}
//SIGN OUT SUCCESS
//SIGN OUT
export function* signOut() {
  yield put({ type: types.SIGN_OUT_SUCCESS, payload: "" });
}

//ERROR
export function* authError() {
  yield put({
    type: types.AUTH_ERROR,
    payload: "Authentication Failed...."
  });
}
