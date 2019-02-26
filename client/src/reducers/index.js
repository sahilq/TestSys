import { combineReducers } from "redux";

import authreducer from "./authreducer";
import testReducer from "./testReducer";
import inviteReducer from "./inviteReducer";
import questionReducer from "./question";

export default combineReducers({
  auth: authreducer,
  test: testReducer,
  invite: inviteReducer,
  que: questionReducer
});
