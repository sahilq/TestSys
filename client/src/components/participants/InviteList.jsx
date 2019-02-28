import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/actionCreators";

class InviteList extends Component {
  state = {};

  componentDidMount() {
    this.props.getInvites(this.props.participantId);
  }

  handleClick = e => {
    console.log(e.currentTarget.getAttribute("time"));

    this.props.setInvite(e.target.title);
    this.props.inviteId(e.target.id);
    this.props.startTest(e.target.value);
  };

  render() {
    let dateNow = new Date(Date.now());
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
                      disabled={new Date(invite.date) > dateNow ? true : false} //if test date is bigger than current date test link is disabled
                      onClick={this.handleClick}
                      value={invite.testId}
                      id={invite._id}
                      date={invite.date}
                      time={invite.time}
                      title={invite.inviteCode}
                      className="btn btn-link p-1 m-1 ml-5"
                    >
                      {new Date(invite.date) < dateNow
                        ? "Attempt Test"
                        : "Available From: " +
                          new Date(invite.date).toLocaleString()}
                    </button>
                    <p>
                      <small>
                        Time available: {Math.floor(invite.time / (60 * 60))}
                        {" hour/s "}
                        {Math.floor((invite.time % (60 * 60)) / 60)}
                        {" minute/s "}
                        {Math.ceil((invite.time % (60 * 60)) % 60)}
                        {" second/s"}
                      </small>
                    </p>
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
    getInvites: participantId => dispatch(actions.fetchInvites(participantId)),
    inviteId: id => dispatch(actions.setInviteId(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteList);
