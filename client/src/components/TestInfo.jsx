import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import * as actions from "../actions/actionCreators";

class TestInfo extends Component {
  state = { test: {} };
  componentDidMount = () => {
    axios
      .get("http://localhost:5000/test/gettest/" + this.props.testId)
      .then(res => {
        this.setState({ test: res.data });
      });
  };

  deactTest = e => {
    localStorage.removeItem("TEST_ID");
    this.props.deactTest();

    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="container">
        <h3>{this.state.test.testName}</h3>
        <p>{this.state.test.description}</p>
        <button onClick={this.deactTest}>Cancel</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { testId: state.test.testId };
}

function mapDispatchToProps(dispatch) {
  return {
    deactTest: () => dispatch(actions.deactTest())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestInfo);
