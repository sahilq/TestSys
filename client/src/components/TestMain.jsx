import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

import QueAttempt from "./QueAttempt";

class TestMain extends Component {
  componentDidMount() {
    if (this.props.role !== "participant") {
      return this.props.history.push("/");
    }
    this.props.getTest(this.props.match.params.id);
  }

  render() {
    const { testName, description, questions } = this.props.test;

    return (
      <div>
        <h1>
          Welcome To Test <small>{testName}</small>
        </h1>
        <h3>{description}</h3>
        <div>
          <ul>
            {questions.map(question => (
              <div key={question._id} className="border border-info">
                <QueAttempt
                  total={this.props.test.questions.length}
                  question={question}
                />
              </div>
            ))}
          </ul>
        </div>
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
