import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class QueDis extends Component {
  state = {};

  deleteQuestion = e => {
    const id = this.props.question._id;
    const testId = e.target.value;
    const data = { testId, id };
    this.props.delQue(data);
  };
  render() {
    let question = this.props.question;
    return (
      <div className="container border p-1 m-2">
        <div className="row">
          <div className="col ml-auto">
            <h5 className="ml-auto border-bottom border-info">
              Question:
              <i> {question.question}</i>
              <button
                className="m-auto float-right btn btn-sm btn-link"
                onClick={this.deleteQuestion}
                value={this.props.testId}
              >
                Delete
              </button>
            </h5>
            <div className="row ml-auto">
              Option 1:
              <span className="mr-5">{question.option1}</span>
              Option 2:
              <span className="mr-5">{question.option2}</span>
            </div>
            <div className="row ml-auto">
              Option 3:
              <span className="mr-5">{question.option3}</span>
              Option 4:
              <span className="mr-5">{question.option4}</span>
            </div>
            <div className="row  border border-info m-auto">
              Answer: <span>{question.answer}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapstateToProps(state) {
  return {
    testId: state.test.testId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delQue: data => dispatch(actions.delQue(data))
  };
}
export default connect(
  mapstateToProps,
  mapDispatchToProps
)(QueDis);
