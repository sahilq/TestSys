import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/actionCreators";

class CreateInvite extends Component {
  state = {
    date: Date,
    time: Number,
    isDate: false,
    isTime: false
  };

  handleClick = e => {
    if (!this.state.isDate || !this.state.isTime) {
      return alert("provide Date and time");
    }
    if (this.state.date < new Date(Date.now())) {
      return alert("Test Date cannot be less than Today's Date");
    }
    const data = {
      testId: e.target.value,
      participantId: this.props.participantId,
      testName: e.target.id,
      time: this.state.time,
      date: this.state.date
    };
    // this.setState({ isDate: false, isTime: false });

    this.props.createInv(data);
  };
  onDateChange = e => {
    let date = new Date(e.target.value);
    // let dateToday = new Date(Date.now());
    this.setState({ date });
    if (e.target.value) this.setState({ isDate: true });
  };

  handleTime = e => {
    let time = e.target.value;
    //convert to hh:mm:ss[*]
    let p = time.split(":");
    time = +p[0] * 60 * 60 + +p[1] * 60;
    this.setState({ time: time, isTime: true });
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
                    min={Date.now()}
                    type="datetime-local"
                    required={true}
                    onChange={this.onDateChange}
                  />
                  <input
                    type="time"
                    onChange={this.handleTime}
                    required={true}
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
