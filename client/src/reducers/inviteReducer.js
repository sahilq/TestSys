import * as types from "../actions/types";

const initialState = {
  invitedTo: [],
  inviteCode: "",
  currentInviteId: "",
  time: Number
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.INVITE_SUCCESS:
      return { ...state, invitedTo: payload };
    case types.SET_INVITE_CODE:
      return { ...state, inviteCode: payload };
    case types.CURRENT_INVITE_ID:
      return { ...state, currentInviteId: payload };
    case types.SET_TIMER:
      return { ...state, time: payload };
    default:
      return state;
  }
};
