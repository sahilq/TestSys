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
import Home from "./components/Home/index";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TestInit from "./components/recruiter/TestInit";
import TestMain from "./components/participants/TestMain";
import TestInfo from "./components/recruiter/TestInfo";
import TestShow from "./components/recruiter/TestShow";
import PartDash from "./components/participants/PartDash";
import InviteBox from "./components/recruiter/InviteBox";
import * as serviceWorker from "./serviceWorker";
//HOCs
// import authGuard from "./components/HOCs/authGuard";
import signOnGuard from "./components/HOC/signOnGuard";
import dashGuard from "./components/HOC/dashGuard";
import testInitHOC from "./components/HOC/testInitHOC";
import homeRedir from "./components/HOC/homeRedir";

//fetch token and user details from localstorage
const jwtToken = localStorage.getItem("JWT_TOKEN");
//set deafault headers
axios.defaults.headers.common["Authorization"] = jwtToken;

// window.onbeforeunload = function() {
//   localStorage.removeItem("JWT_TOKEN");
//   localStorage.removeItem("USER");
//   localStorage.removeItem("TEST_ID");

//   return "";
// };

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        {/* Send components to App.js as children props to be rendered */}
        <Route exact path="/" component={homeRedir(Home)} />
        <Route exact path="/invite" component={InviteBox} />
        <Route exact path="/pdashboard" component={PartDash} />
        <Route exact path="/teststart/:id" component={TestMain} />

        <Route exact path="/testinit" component={testInitHOC(TestInit)} />
        <Route exact path="/signup" component={signOnGuard(SignUp)} />
        <Route exact path="/signin" component={signOnGuard(SignIn)} />
        <Route exact path="/testinfo" component={dashGuard(TestInfo)} />
        <Route exact path="/testshow" component={testInitHOC(TestShow)} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
