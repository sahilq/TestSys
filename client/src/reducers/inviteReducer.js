import * as types from "../actions/types";

const initialState = {
  invitedTo: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.INVITE_SUCCESS:
      return { ...state, invitedTo: payload };

    default:
      return state;
  }
};
