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

//
////
//////
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

//TEST INIT REQ
export const testInit = payload => ({
  type: types.TEST_INIT_REQ,
  payload
});
export const testEditReq = data => ({
  type: types.TEST_EDIT_REQ,
  data
});

//Test Edit

//TEST DEACTIVATE
export const deactTest = () => ({
  type: types.DEACTIVATE_TEST
});

//FETCH ALL TESTS
export const fetchTests = () => ({
  type: types.FETCHALL_TEST
});

//TEST INIT SUCCESS
export function* testInitSuccess(data) {
  let payload = { testActive: true, testId: data._id };
  yield put({ type: types.TEST_INIT_SUCCESS, payload });
}
//TEST DEACT
export function* testDeact() {
  yield put(types.DEACTIVATE_TEST_SUCCESS);
}
