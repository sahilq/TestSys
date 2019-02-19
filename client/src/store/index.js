//required libraries
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import axios from "axios";

//saga
import mySaga from "../sagas/rootSaga";

//reducer
import reducer from "../reducers/index";

//init saga middleware
const sagaMiddleware = createSagaMiddleware();

//using compose to add redux devtools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//fetch token and users details from local storage
const jwtToken = localStorage.getItem("JWT_TOKEN");
let user = localStorage.getItem("USER");
console.log(user ? "Logged In" : "Not Logged In");

if (user) {
  //check if session exists
  user = user.split('"'); //spliting user-object-stringfied string stored in localstorage by(")
  console.log("checking value.......", user); //cheacking user array elements
}

//set headers
axios.defaults.headers.common["Authorization"] = jwtToken;

//fetching test info
let testId = localStorage.getItem("TEST_ID");

//init store with session details
const store = createStore(
  reducer,
  {
    auth: {
      token: jwtToken,
      userName: user ? user[11] : "", //setting user details as per array element
      userId: user ? user[7] : "",
      role: user ? user[15] : "",
      isAuthenticated: jwtToken ? true : false
    },
    test: {
      testId: testId,
      testActive: testId ? true : false,
      tests: []
    }
  },
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
//runnig root saga[]
sagaMiddleware.run(mySaga);

//export store
export default store;
