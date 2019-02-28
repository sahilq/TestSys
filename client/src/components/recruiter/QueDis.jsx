import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/actionCreators";
import ShowQue from "./ShowQue";
import EditQue from "./EditQue";

class QueDis extends Component {
  state = {
    isEditing: false,
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
    const { option1, option2, option3, option4, answer } = this.props.question;
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
      console.log(data);
      this.setState({
        question: "",
        answer: "",
        option1: "",
        option2: "",
        option3: "",
        option4: ""
      });
      this.editToggle();
    } else {
      alert("Re-check Options");
    }
  };

  editToggle = () => {
    if (this.state.isEditing) {
      this.setState({ isEditing: false });
    } else {
      this.setState({ isEditing: true });
    }
  };

  deleteQuestion = e => {
    const id = this.props.question._id;
    const testId = e.target.value;
    const data = { testId, id };
    this.props.delQue(data);
  };
  render() {
    if (!this.state.isEditing) {
      return (
        <ShowQue question={this.props.question} editToggle={this.editToggle} />
      );
    } else {
      return (
        <EditQue question={this.props.question} editToggle={this.editToggle} />
      );
    }
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
