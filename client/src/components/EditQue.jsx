import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class EditQue extends Component {
  state = {
    question: "",
    answer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  checkOptions = question => {
    const { option1, option2, option3, option4, answer } = question;
    if (
      answer === option1 ||
      answer === option2 ||
      answer === option3 ||
      answer === option4
    ) {
      if (
        option1 !== option2 &&
        option1 !== option3 &&
        option1 !== option4 &&
        option2 !== option3 &&
        option2 !== option4 &&
        option3 !== option4
      ) {
        return true;
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const question = {
      question: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: ""
    };

    for (let prop in question) {
      if (this.state[prop] !== "") {
        question[prop] = this.state[prop];
      } else {
        question[prop] = this.props.question[prop];
      }
    }

    let check = this.checkOptions(question);
    if (check) {
      const testId = this.props.testId;
      const id = this.props.question._id;
      //api req to edit question
      const payload = {
        id,
        testId,
        question
      };
      this.props.queEdit(payload);

      this.props.editToggle();
    } else {
      alert(
        "Note:\n1:-Option Should not match Each Other.\n2:-Only One Option Should Match Answer.\n3:- One Option Must Match Answer."
      );
      this.props.editToggle();
    }
    this.setState({
      question: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: ""
    });
  };

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col">
            <h3>EDIT QUESTION:</h3>
          </div>{" "}
        </div>
        <div className="row">
          <div className="col">
            <form className="p-1" onSubmit={this.handleSubmit}>
              <div className="form-row m-1">
                <input
                  className="form-control input-lg"
                  type="text"
                  placeholder={this.props.question.question}
                  value={this.state.question}
                  id="question"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-row ml-auto">
                <input
                  className="m-1 "
                  id="option1"
                  onChange={this.handleChange}
                  type="text"
                  autoComplete="off"
                  placeholder={this.props.question.option1}
                  value={this.state.option1}
                />
                <input
                  className="m-1"
                  id="option2"
                  onChange={this.handleChange}
                  type="text"
                  autoComplete="off"
                  value={this.state.option2}
                  placeholder={this.props.question.option2}
                />{" "}
                <input
                  className="m-1"
                  id="option3"
                  autoComplete="off"
                  value={this.state.option3}
                  onChange={this.handleChange}
                  type="text"
                  placeholder={this.props.question.option3}
                />
                <input
                  className="m-1"
                  id="option4"
                  autoComplete="off"
                  value={this.state.option4}
                  onChange={this.handleChange}
                  type="text"
                  placeholder={this.props.question.option4}
                />
              </div>
              <div className="form-row ml-auto">
                {" "}
                <input
                  className="m-1"
                  id="answer"
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={this.state.answer}
                  type="text"
                  placeholder={this.props.question.answer}
                />
                <input
                  type="submit"
                  value="Change"
                  className="btn btn-primary btn-sm m-1"
                />
              </div>
            </form>
            <button
              className="btn btn-sm btn-info m-1"
              onClick={this.props.editToggle}
            >
              &#8592; Back
            </button>
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
    queEdit: payload => dispatch(actions.editQue(payload))
  };
}
export default connect(
  mapstateToProps,
  mapDispatchToProps
)(EditQue);
