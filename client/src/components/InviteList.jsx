import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class InviteList extends Component {
  state = {};

  componentDidMount() {
    this.props.getInvites(this.props.participantId);
  }

  handleClick = e => {
    this.props.setInvite(e.target.id);
    this.props.startTest(e.target.value);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Invites</h3>
            <ul className="list-unstyled">
              {this.props.invitedTo.map(invite => (
                <li key={invite._id}>
                  <div className="border-bottom border-secondary m-1">
                    <span className="btn btn-outline-success disabled">
                      {invite.testName}
                    </span>
                    <button
                      onClick={this.handleClick}
                      value={invite.testId}
                      id={invite.inviteCode}
                      className="btn btn-link p-1 m-1 ml-5"
                    >
                      Attempt This Test
                    </button>
                  </div>
                </li>
              ))}
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
    setInvite: inviteCode => dispatch(actions.setInviteCode(inviteCode)),
    getInvites: participantId => dispatch(actions.fetchInvites(participantId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteList);
