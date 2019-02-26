import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

import QueAttempt from "./QueAttempt";

class TestMain extends Component {
  state = {
    qn: 0,
    isCompleted: false,
    total: 0,
    score: 0,
    length: 0
  };
  componentDidMount = () => {
    this.props.getTest(this.props.match.params.id);
  };
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps = nextProps => {
    this.setState({
      total: nextProps.test.questions.length,
      length: nextProps.test.questions.length
    });
  };
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
    console.log(this.state);
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
