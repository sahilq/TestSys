import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTests } from "../actions/actionCreators";

import ParticipantsList from "./ParticipantsList";

class TestShow extends Component {
  componentWillMount = () => {
    this.props.fetchTestsAll();
  };

  handleClick = e => {
    this.setState({ child: null });
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
          {" "}
          <div className="col">
            <h3>
              <i className="text-muted">Welcome</i>{" "}
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
            <ParticipantsList />
          </div>
          <div className="col">{/* Marks wise Participants list */}</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tests: state.test.tests
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchTestsAll: () => dispatch(fetchTests())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestShow);
