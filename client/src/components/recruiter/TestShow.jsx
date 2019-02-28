import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTests, fetchScores } from "../../actions/actionCreators";

import ParticipantsList from "./ParticipantsList";
import MarksList from "./MarksList";

class TestShow extends Component {
  componentWillMount = () => {
    const userId = this.props.userId;

    this.props.fetchTestsAll(userId);
    this.props.fetchScores();
  };

  handleClick = e => {
    let select = e.target.value;
    this.props.history.push({
      pathname: "/testinfo",

      state: { detail: select }
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>
              <i className="text-muted">Welcome</i>
              <small>{this.props.userName}</small>
            </h3>
            <div>
              Designation:<span className="ml-3">Recruiter</span>
            </div>
            <select
              onChange={this.handleClick}
              className="list-group btn btn-lg btn-outline-primary mr-auto my-2"
            >
              <option>Select Test:</option>
              {this.props.tests.map(test => (
                <option value={test._id} key={test._id}>
                  {test.testName}
                </option>
              ))}
            </select>
            <hr color="blue" />
            {/* List of Registered participants */}
            <h3>List of registered participants</h3>
            <ParticipantsList history={this.props.history} />
          </div>
          <div className="col">
            {/* Marks wise Participants list */}
            <h3>Marks/Participants List</h3>
            <MarksList scoresList={this.props.scoresList} />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tests: state.test.tests,
    userId: state.auth.userId,
    scoresList: state.score.scoresList
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchTestsAll: userId => dispatch(fetchTests(userId)),
    fetchScores: () => dispatch(fetchScores())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestShow);
