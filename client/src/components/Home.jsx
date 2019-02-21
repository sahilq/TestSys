import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Login To Continue</h1>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    role: state.auth.role,
    isAuth: state.auth.isAuthenticated
  };
}

function mapDispatchTopProps(dispatch) {
  return {};
}

export default connect(
  mapStateTopProps,
  mapDispatchTopProps
)(Home);
