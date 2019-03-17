/////////////////////////
// TO BE CREATED HOME PAGE[x]
/////////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container m-auto">
        <div className="row m-auto">
          <div className="col m-auto">
            <h2 className="m-5 p-5">Home Page To BE Created Here[x]</h2>
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
