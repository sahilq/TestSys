import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class ShowQue extends Component {
  state = {};

  deleteQuestion = e => {
    const id = this.props.question._id;
    const testId = e.target.value;
    const data = { testId, id };
    this.props.delQue(data);
  };
  render() {
    let {
      question,
      option1,
      option2,
      option3,
      option4,
      answer
    } = this.props.question;
    return (
      <div className="container border p-0 m-0">
        <div className="m-1 row">
          <div className="col-lg">
            <h5 className="border-bottom border-info">
              Question:
              <i> {question}</i>
              <button
                className="float-right btn btn-sm btn-link"
                onClick={this.deleteQuestion}
                value={this.props.testId}
              >
                Delete
              </button>
              <button
                className="float-right btn btn-sm btn-link"
                onClick={this.props.editToggle}
              >
                Edit
              </button>
            </h5>
          </div>
        </div>
        <div className="row m-auto">
          <div className="col">
            <div className="row ml-auto">
              <p className="col">
                Option 1:
                <span className="m-auto">{option1}</span>
              </p>
              <p className="col">
                Option 2:
                <span className="m-auto">{option2}</span>
              </p>
            </div>
            <div className="row ml-auto">
              <p className="col">
                Option 3:
                <span className="m-auto">{option3}</span>
              </p>
              <p className="col">
                Option 4:
                <span className="m-auto">{option4}</span>
              </p>
            </div>
            <div className="row p-1 border border-info m-auto">
              Answer: <span className="m-auto">{answer}</span>
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
)(ShowQue);
