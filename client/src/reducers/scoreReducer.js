import * as types from "../actions/types";
const initialState = {
  scoresList: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_SCORES_SUCCESS:
      return { ...state, scoresList: payload };

    default:
      return state;
  }
};
