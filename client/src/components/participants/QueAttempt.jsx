import React, { Component } from "react";

class QueAttempt extends Component {
  state = {
    answer: "",
    correct: this.props.question.answer
  };
  handleOptions = e => {
    this.setState({
      answer: e.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.answer !== "") {
      if (this.state.answer === this.state.correct) {
        let isCorrect = true;
        this.props.submitAnswer(isCorrect);
        this.setState({ answer: "" });
      } else {
        let isCorrect = false;
        this.props.submitAnswer(isCorrect);
        this.setState({ answer: "" });
      }
    } else {
      alert("No Answer Provided");
    }
  };

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    this.setState({ correct: nextProps.question.answer });
  }

  render() {
    const { question } = this.props;

    return (
      <div
        className="container p-2"
        style={{
          backgroundImage:
            "linear-gradient(to right,hsl(0, 100%, 70%) , hsla(120, 100%, 75%, 0.3))",
          borderRadius: 7
        }}
      >
        <div className="row">
          <div className="col">
            <table>
              <thead>
                <tr>
                  <th className="bg-success">Question:- {question.question}</th>
                </tr>
                <tr>
                  <th>Options:</th>
                </tr>
              </thead>
              <tbody>
                <tr className="row">
                  <td className="col">
                    <div>
                      <button
                        className="btn btn-sm btn-light m-1 btn-block"
                        onClick={this.handleOptions}
                        value={question.option1}
                      >
                        <input
                          checked={this.state.answer === question.option1}
                          type="radio"
                          className="float-left mr-auto mt-1 p-0"
                          onChange={this.handleOptions}
                          value={question.option1}
                        />
                        {question.option1}
                      </button>
                    </div>

                    <div>
                      <button
                        className="btn btn-sm btn-light p-1 m-1 btn-block"
                        onClick={this.handleOptions}
                        value={question.option2}
                      >
                        <input
                          checked={this.state.answer === question.option2}
                          type="radio"
                          className="float-left mr-auto mt-1 p-0"
                          onChange={this.handleOptions}
                          value={question.option2}
                        />
                        {question.option2}
                      </button>
                    </div>
                  </td>
                  <td className="col">
                    <div>
                      <button
                        className="btn btn-sm btn-light p-1 m-1 btn-block"
                        onClick={this.handleOptions}
                        value={question.option3}
                      >
                        <input
                          checked={this.state.answer === question.option3}
                          type="radio"
                          className="float-left mr-auto mt-1 p-0"
                          onChange={this.handleOptions}
                          value={question.option3}
                        />
                        {question.option3}
                      </button>
                    </div>

                    <div>
                      <button
                        className="btn btn-sm btn-light p-1 m-1 btn-block"
                        onClick={this.handleOptions}
                        value={question.option4}
                      >
                        <input
                          checked={this.state.answer === question.option4}
                          type="radio"
                          className="float-left mr-auto mt-1 p-0"
                          onChange={this.handleOptions}
                          value={question.option4}
                        />
                        {question.option4}
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QueAttempt;
