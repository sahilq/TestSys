import React, { Component } from "react";

class MarksList extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table>
              <thead>
                <tr className="row">
                  <th className="col">Test Name:</th>
                  <th className="col">Participant's Name:</th>
                  <th className="col">Total:</th>

                  <th className="col">Score:</th>
                </tr>
              </thead>
              <tbody>
                {this.props.scoresList.map(score => (
                  <tr className="row border-bottom" key={score._id}>
                    <td className="col d-block">{score.testName}</td>
                    <td className="col d-block">{score.userName}</td>
                    <td className="col d-block">{score.total}</td>
                    <td className="col d-block">{score.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MarksList;
