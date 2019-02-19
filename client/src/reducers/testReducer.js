import * as types from "../actions/types";

const initialState = {
  testActive: false,
  testId: "",
  tests: []
};

export default function testReducer(state = initialState, action) {
  const newState = state;
  if (action.type === types.TEST_INIT_SUCCESS) {
    return { ...newState, ...action.payload };
  }
  if (action.type === types.FETCH_ALL_SUCCESS) {
    console.log(action);
    return { ...newState, tests: [...action.payload] };
  }
  if (action.type === types.DEACTIVATE_TEST) {
    return { ...newState, testActive: false, testId: "" };
  }
  return newState;
}

// export default (newState = initialState, { type, payload }) => {
//   switch (type) {
//     case types.TEST_INIT_SUCCESS:
//       return { ...newState, ...payload };

//     case types.FETCH_ALL_SUCCESS:
//       return { ...newState, tests: [...payload] };

//     case types.DEACTIVATE_TEST:
//       return { ...newState, testActive: false, testId: "" };
//     default:
//       return newState;
//   }
// };
