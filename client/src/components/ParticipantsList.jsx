import React, { Component } from "react";
import { connect } from "react-redux";

import { getParticipants } from "../actions/actionCreators";

class ParticipantsList extends Component {
  componentDidMount = () => {
    this.props.getParts();
  };
  handleClick = e => {
    this.props.history.push({
      pathname: "/invite",

      state: { detail: e.target.value }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              {this.props.parts &&
                this.props.parts.map(part => (
                  <li key={part._id}>
                    {part.name}
                    <button
                      onClick={this.handleClick}
                      value={part._id}
                      className="btn-sm btn-primary m-1 p-1"
                    >
                      Invite
                    </button>
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
    parts: state.auth.participants
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getParts: () => dispatch(getParticipants())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantsList);
