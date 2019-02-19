import { combineReducers } from "redux";

import authreducer from "./authreducer";
import testReducer from "./testReducer";

export default combineReducers({
  auth: authreducer,
  test: testReducer
});
