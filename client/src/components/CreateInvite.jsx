import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class CreateInvite extends Component {
  state = {};

  handleClick = e => {
    const data = {
      testId: e.target.value,
      participantId: this.props.participantId,
      testName: e.target.id
    };

    this.props.createInv(data);
  };

  render() {
    let arr = [];
    {
      this.props.invitedTo.map(invite => {
        if (invite.participantId === this.props.participantId) {
          arr.push(invite.testId);
        }
      });
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              {this.props.test.testName}
              {arr.includes(this.props.test._id) ? (
                <button className="btn btn-link float-right disabled">
                  Invited
                </button>
              ) : (
                <button
                  className="btn btn-link float-right"
                  onClick={this.handleClick}
                  value={this.props.test._id}
                  id={this.props.test.testName}
                >
                  Invite
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    invitedTo: state.invite.invitedTo
  };
}
function mapDispatchToProps(dispatch) {
  return {
    createInv: data => dispatch(actions.createInv(data)),
    getInvites: participantId => dispatch(actions.fetchInvites(participantId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateInvite);
