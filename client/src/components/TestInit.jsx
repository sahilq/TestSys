import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class TestInit extends Component {
  state = { testName: "", description: "" };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      userId: this.props.userId,
      testName: this.state.testName,
      description: this.state.description,
      questions: []
    };
    this.props.testInit(data);
    this.setState({ testName: "", description: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Enter Test Info:</h4>
            <form className="p-1" onSubmit={this.handleSubmit}>
              <div className="form-row m-1">
                <input
                  className="form-control col"
                  type="text"
                  placeholder="Test Name"
                  id="testName"
                  required={true}
                  autoComplete="off"
                  value={this.state.testName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-row">
                <div className="col">
                  <textarea
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Description "
                    id="description"
                    required={true}
                    onChange={this.handleChange}
                    value={this.state.description}
                  />
                </div>
              </div>
              <input type="submit" className="btn btn-primary btn-sm m-1" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapstateToProps(state) {
  return {
    userId: state.auth.userId,
    testActive: state.test.testActive,
    testId: state.test.testId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    testInit: data => dispatch(actions.testInit(data))
  };
}
export default connect(
  mapstateToProps,
  mapDispatchToProps
)(TestInit);
