import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

import QueAttempt from "./QueAttempt";

class TestMain extends Component {
  state = {
    qn: 0,
    isCompleted: false,
    total: this.props.test.questions.length,
    score: 0,
    length: this.props.test.questions.length
  };
  componentDidMount() {
    if (this.props.role !== "participant") {
      return this.props.history.push("/");
    }
    this.props.getTest(this.props.match.params.id);
  }

  submitAnswer = isCorrect => {
    if (this.state.length >= 0) {
      if (!isCorrect) {
        this.setState({ length: this.state.length - 1, qn: this.state.qn + 1 });
      } else {
        this.setState({
          score: this.state.score + 1,
          length: this.state.length - 1,
          qn: this.state.qn + 1
        });
      }
    } else {
      this.setState({ isCompleted: true });
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
        {!this.state.isCompleted && questions[this.state.qn] ? (
          <div>
            <QueAttempt
              question={questions[this.state.qn]}
              submitAnswer={this.submitAnswer}
            />
          </div>
        ) : (
          <div>
            <h1>Test Completed</h1>
            <h3>
              You have Scored {this.state.score}/{this.state.total}
            </h3>
          </div>
        )}
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
