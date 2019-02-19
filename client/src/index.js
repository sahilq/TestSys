//required libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

//import store
import store from "./store/index";
//components
import App from "./components/App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TestInit from "./components/TestInit";
import TestInfo from "./components/TestInfo";
import TestShow from "./components/TestShow";
import * as serviceWorker from "./serviceWorker";
//HOCs
// import authGuard from "./components/HOCs/authGuard";
import signOnGuard from "./components/HOC/signOnGuard";
import dashGuard from "./components/HOC/dashGuard";
import testInitHOC from "./components/HOC/testInitHOC";

//fetch token and user details from localstorage
const jwtToken = localStorage.getItem("JWT_TOKEN");
//set deafault headers
axios.defaults.headers.common["Authorization"] = jwtToken;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        {/* Send components to App.js as children props to be rendered */}
        <Route exact path="/dashboard" component={testInitHOC(TestInit)} />
        <Route exact path="/signup" component={signOnGuard(SignUp)} />
        <Route exact path="/signin" component={signOnGuard(SignIn)} />
        <Route exact path="/testinfo" component={dashGuard(TestInfo)} />
        <Route exact path="/testshow" component={dashGuard(TestShow)} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
