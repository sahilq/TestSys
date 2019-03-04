import React, { Component } from "react";
import { connect } from "react-redux";

import InviteList from "./InviteList";

class PartDash extends Component {
  state = {};

  componentDidMount() {
    if (this.props.role !== "participant") {
      this.props.history.push("/");
    }
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.role !== "participant") {
      this.props.history.push("/");
    }
  }

  startTest = id => {
    this.props.history.push("/teststart/" + id);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>
              Hello,<small>{this.props.userName}</small>
            </h1>
            <InviteList
              participantId={this.props.userId}
              startTest={this.startTest}
            />
          </div>
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
    userName: state.auth.userName,
    role: state.auth.role
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartDash);
