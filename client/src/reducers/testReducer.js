import * as types from "../actions/types";

const initialState = {
  testActive: false,
  testId: ""
};

export default (newState = initialState, { type, payload }) => {
  switch (type) {
    case types.TEST_INIT_SUCCESS:
      return { ...newState, ...payload };

    case types.DEACTIVATE_TEST:
      console.log(type);
      return { ...newState, testActive: false, testId: "" };
    default:
      return newState;
  }
};
