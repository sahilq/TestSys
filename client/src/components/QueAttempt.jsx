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

  render() {
    const { question } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table>
              <thead>
                <tr>
                  <th className="bg-success">Question:- {question.question}</th>
                </tr>
                <tr>
                  <th>Options:</th>
                  <th>Options:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <input
                        checked={this.state.answer === question.option1}
                        type="radio"
                        onChange={this.handleOptions}
                        value={question.option1}
                      />
                      <span>{question.option1}</span>
                    </div>

                    <div>
                      <input
                        checked={this.state.answer === question.option2}
                        type="radio"
                        onChange={this.handleOptions}
                        value={question.option2}
                      />
                      <span>{question.option2}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <input
                        checked={this.state.answer === question.option3}
                        type="radio"
                        onChange={this.handleOptions}
                        value={question.option3}
                      />
                      <span>{question.option3}</span>
                    </div>

                    <div>
                      <input
                        checked={this.state.answer === question.option4}
                        type="radio"
                        onChange={this.handleOptions}
                        value={question.option4}
                      />
                      <span>{question.option4}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default QueAttempt;
