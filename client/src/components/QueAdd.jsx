import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class QueAdd extends Component {
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

  checkOptions = () => {
    const { option1, option2, option3, option4, answer } = this.state;
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
    let check = this.checkOptions();
    if (check) {
      const question = this.state;
      const id = this.props.testId;
      const data = { id, question };
      this.props.queAdd(data);
      this.setState({
        question: "",
        answer: "",
        option1: "",
        option2: "",
        option3: "",
        option4: ""
      });
    } else {
      alert("Re-check Options");
    }
  };

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col">
            <h3>ADD QUESTION:</h3>
          </div>{" "}
        </div>
        <div className="row">
          <div className="col">
            <form className="p-1" onSubmit={this.handleSubmit}>
              <div className="form-row m-1">
                <input
                  className="form-control input-lg"
                  type="text"
                  placeholder="Question ?"
                  value={this.state.question}
                  id="question"
                  onChange={this.handleChange}
                  required={true}
                  autoComplete="off"
                />
              </div>
              <div className="form-row ml-auto">
                <input
                  className="m-1 "
                  id="option1"
                  required={true}
                  onChange={this.handleChange}
                  type="text"
                  autoComplete="off"
                  placeholder="Option 1"
                  value={this.state.option1}
                />
                <input
                  className="m-1"
                  id="option2"
                  required={true}
                  onChange={this.handleChange}
                  type="text"
                  autoComplete="off"
                  value={this.state.option2}
                  placeholder="Option 2"
                />{" "}
                <input
                  className="m-1"
                  id="option3"
                  required={true}
                  autoComplete="off"
                  value={this.state.option3}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Option 3"
                />
                <input
                  className="m-1"
                  id="option4"
                  required={true}
                  autoComplete="off"
                  value={this.state.option4}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Option 4"
                />
              </div>
              <div className="form-row ml-auto">
                {" "}
                <input
                  className="m-1"
                  id="answer"
                  required={true}
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={this.state.answer}
                  type="text"
                  placeholder="Answer"
                />
                <input
                  type="submit"
                  value="Add"
                  className="btn btn-primary btn-sm m-1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapstateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    queAdd: data => dispatch(actions.addQue(data))
  };
}
export default connect(
  mapstateToProps,
  mapDispatchToProps
)(QueAdd);
