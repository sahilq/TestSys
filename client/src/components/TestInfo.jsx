import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import * as actions from "../actions/actionCreators";

class TestInfo extends Component {
  state = { test: {} };
  componentDidMount = () => {
    console.log("history params", this.props.location.state.detail);

    let id = this.props.location.state.detail;
    localStorage.setItem("TEST_ID", id);
    axios.get("http://localhost:5000/test/gettest/" + id).then(res => {
      this.setState({ test: res.data });
    });
    this.props.editTest(id);
  };

  deactTest = e => {
    localStorage.removeItem("TEST_ID");
    this.props.deactTest();

    this.props.history.push("/testshow");
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
//
function mapDispatchToProps(dispatch) {
  return {
    deactTest: () => dispatch(actions.deactTest()),
    editTest: id => dispatch(actions.testEditReq(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestInfo);
