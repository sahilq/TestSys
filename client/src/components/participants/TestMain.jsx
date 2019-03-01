import React, { Component } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import * as actions from "../../actions/actionCreators";

import QueAttempt from "./QueAttempt";
import Timer from "./Timer";

class TestMain extends Component {
  state = {
    qn: 0,
    isCompleted: false,
    total: 0,
    score: 0,
    length: 0
  };

  inviteCodeVerify = code => {
    if (code) {
      const token = jwt_decode(code);
      if (token.sub !== this.props.userId) {
        return this.props.history.push("/");
      }
    }
  };

  componentDidMount = () => {
    if (!this.props.inviteCode) {
      return this.props.history.push("/");
    }
    this.props.getTest(this.props.match.params.id);
  };
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps = nextProps => {
    this.inviteCodeVerify(nextProps.inviteCode);
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

  testCompleted = () => {
    const inviteId = this.props.inviteId;
    const score = this.state.score;
    const userName = this.props.userName;
    const participantId = this.props.userId;
    const testId = this.props.test._id;
    const total = this.state.total;
    const testName = this.props.test.testName;
    const data = {
      total,
      inviteId,
      score,
      userName,
      testName,
      participantId,
      testId
    };
    this.props.saveScore(data);
    this.setState({ isCompleted: true });
  };

  render() {
    const { testName, description, questions } = this.props.test;

    return (
      <div>
        <h1>
          Welcome To Test <small>{testName}</small>
        </h1>
        <div>
          <h3>{description}</h3>
          <Timer time={this.props.time} endTest={this.testCompleted} />
        </div>
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
            {/* function call */}
            {this.state.qn !== 0 && this.state.qn === this.state.total
              ? this.testCompleted()
              : null}
            {/* function call */}
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
    userId: state.auth.userId,
    userName: state.auth.userName,

    test: state.test.test,
    inviteCode: state.invite.inviteCode,
    inviteId: state.invite.currentInviteId,

    time: state.invite.time
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTest: id => dispatch(actions.getTest(id)),
    saveScore: data => dispatch(actions.saveScore(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestMain);
