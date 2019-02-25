import { combineReducers } from "redux";

import authreducer from "./authreducer";
import testReducer from "./testReducer";
import inviteReducer from "./inviteReducer";

export default combineReducers({
  auth: authreducer,
  test: testReducer,
  invite: inviteReducer
});
