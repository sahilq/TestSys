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
import * as serviceWorker from "./serviceWorker";
//HOCs
// import authGuard from "./components/HOCs/authGuard";
import signOnGuard from "./components/HOC/signOnGuard";
import dashGuard from "./components/HOC/dashGuard";

//fetch token and user details from localstorage
const jwtToken = localStorage.getItem("JWT_TOKEN");
//set deafault headers
axios.defaults.headers.common["Authorization"] = jwtToken;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        {/* Send components to App.js as children props to be rendered */}
        <Route exact path="/dashboard" component={dashGuard(TestInit)} />
        <Route exact path="/signup" component={signOnGuard(SignUp)} />
        <Route exact path="/signin" component={signOnGuard(SignIn)} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();