import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";
import CreateInvite from "./CreateInvite";

class InviteBox extends Component {
  componentDidMount = () => {
    if (!this.props.location.state.detail) {
      return this.props.history.push("/");
    }
    this.props.getInvites(this.props.location.state.detail);
  };

  handleBack = () => {
    this.props.history.push("/testshow");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              {this.props.tests &&
                this.props.tests.map(test => (
                  <li className="border border-success" key={test._id}>
                    <div className="p-1">
                      <CreateInvite
                        test={test}
                        participantId={this.props.location.state.detail}
                      />
                    </div>
                  </li>
                ))}
              <button className="btn btn-warning " onClick={this.handleBack}>
                Back
              </button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.auth.userId,
    tests: state.test.tests,
    invitedTo: state.invite.invitedTo
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getInvites: participantId => dispatch(actions.fetchInvites(participantId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteBox);
