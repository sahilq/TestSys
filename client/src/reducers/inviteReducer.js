import * as types from "../actions/types";

const initialState = {
  invitedTo: [],
  inviteCode: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.INVITE_SUCCESS:
      return { ...state, invitedTo: payload };
    case types.SET_INVITE_CODE:
      return { ...state, inviteCode: payload };
    default:
      return state;
  }
};
