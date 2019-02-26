import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container m-auto">
        <div className="row m-auto">
          <div className="col m-auto">
            <h1 className="m-5 p-5">Login To Continue</h1>
          </div>
        </div>
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