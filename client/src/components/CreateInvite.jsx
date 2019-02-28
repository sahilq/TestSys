import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class CreateInvite extends Component {
  state = {
    date: Date,
    isDate: false
  };

  handleClick = e => {
    if (!this.state.isDate) return alert("provide Date");
    if (this.state.date < Date.now()) return alert("invalid date");
    const data = {
      testId: e.target.value,
      participantId: this.props.participantId,
      testName: e.target.id
    };

    this.props.createInv(data);
  };
  onDateChange = e => {
    console.log(e.target.value);
    this.setState({ isDate: true });
  };
  render() {
    //Array that contains testIds of Invites for a Particular Participant
    let invitedTo = this.props.invitedTo;
    let brr = [];
    for (let invite in invitedTo) {
      if (invitedTo[invite].participantId === this.props.participantId) {
        brr.push(invitedTo[invite].testId);
      }
    }
    ////////////////
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              {this.props.test.testName}
              {brr.includes(this.props.test._id) ? (
                <button className="btn btn-link float-right disabled">
                  Invited
                </button>
              ) : (
                <div>
                  <input
                    type="datetime-local"
                    required={true}
                    onChange={this.onDateChange}
                  />
                  <button
                    className="btn btn-link float-right"
                    onClick={this.handleClick}
                    value={this.props.test._id}
                    id={this.props.test.testName}
                  >
                    Invite
                  </button>
                </div>
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
