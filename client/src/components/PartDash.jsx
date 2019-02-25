import React, { Component } from "react";
import { connect } from "react-redux";

import InviteList from "./InviteList";

class PartDash extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>
              Hello,<small>{this.props.userName}</small>
            </h1>
            <InviteList participantId={this.props.userId} />
          </div>{" "}
          <div className="col" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tests: state.test.tests,
    userId: state.auth.userId,
    userName: state.auth.userName
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartDash);
