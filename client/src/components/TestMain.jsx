import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class TestMain extends Component {
  state = {
    nq: 0
  };

  componentDidMount() {
    if (this.props.role !== "participant") {
      return this.props.history.push("/");
    }
    this.props.getTest(this.props.match.params.id);
  }

  showQue = () => {
    const questions = this.props.test.questions;
    this.setState({ nq: this.state.nq + 1 });
    if (questions[this.state.nq]) {
      console.log(questions[this.state.nq]);
    } else {
      console.log("Questions finished");
    }
  };

  render() {
    const { testName, description, questions } = this.props.test;
    return (
      <div>
        <h1>
          Welcome To Test <small>{testName}</small>
        </h1>
        <h3>{description}</h3>
        <button onClick={this.showQue}>Log</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isAutn: state.auth.isAuthenticated,
    role: state.auth.role,
    test: state.test.test
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTest: id => dispatch(actions.getTest(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestMain);
