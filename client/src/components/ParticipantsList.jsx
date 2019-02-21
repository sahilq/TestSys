import React, { Component } from "react";
import { connect } from "react-redux";

import { getParticipants } from "../actions/actionCreators";
import CreateInvite from "./CreateInvite";

class ParticipantsList extends Component {
  componentDidMount = () => {
    this.props.getParts();
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
                    {/* modal button */}
                    <button
                      type="button"
                      className="btn btn-primary btn-sm m-2"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Invite
                    </button>
                    {/* modal button */}

                    {/* modal starts */}
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Invite
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <CreateInvite participantId={part._id} />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* modal ends */}
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
