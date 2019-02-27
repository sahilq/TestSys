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

//ERROR Sign Up
export function* authErrorReg() {
  yield put({
    type: types.AUTH_ERROR_REG,
    payload: "Registration Failed...."
  });
}

//ERROR Sign In
export function* authErrorLog() {
  yield put({
    type: types.AUTH_ERROR_LOG,
    payload: "Authentication Failed...."
  });
}

//Fetch participants
export const getParticipants = () => ({
  type: types.GET_PARTICIPANTS
});

//TEST INIT REQ
export const testInit = payload => ({
  type: types.TEST_INIT_REQ,
  payload
});
//Delete Test
export const deleteTest = payload => ({
  type: types.DELETE_TEST,
  payload
});

//Test Edit
export const editTestReq = (id, data) => ({
  type: types.TEST_EDIT_REQ,
  id,
  data
});

//ADD QUE
export const addQue = payload => ({
  type: types.ADD_QUE_REQ,
  payload
});

//DELETE_QUE
export const delQue = payload => ({
  type: types.DEL_QUE_REQ,
  payload
});

//Edit que
export const editQue = payload => ({
  type: types.EDIT_QUE,
  payload
});

//TEST DEACTIVATE
export const deactTest = () => ({
  type: types.DEACTIVATE_TEST
});

//FETCH ALL TESTS
export const fetchTests = userId => ({
  type: types.FETCHALL_TEST,
  userId
});

//GET_TEST
export const getTest = id => ({
  type: types.GET_TEST,
  id
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

//INVITES Actions

//create Invite
export const createInv = payload => ({
  type: types.CREATE_INVITE,
  payload
});

// Fetch Invites
export const fetchInvites = payload => ({
  type: types.GET_INVITES,
  payload
});

//set Invite Code
export const setInviteCode = payload => ({
  type: types.SET_INVITE_CODE,
  payload
});
