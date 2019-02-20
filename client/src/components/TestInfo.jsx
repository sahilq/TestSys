import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreators";

class TestInfo extends Component {
  state = {};
  componentDidMount = () => {
    console.log("history params", this.props.location.state.detail);

    let id = this.props.location.state.detail;
    localStorage.setItem("TEST_ID", id);
    this.props.getTest(id);
  };

  deactTest = e => {
    localStorage.removeItem("TEST_ID");
    this.props.deactTest();

    this.props.history.push("/testshow");
  };

  handleDelete = e => {
    //handle delete
    const id = this.props.test._id;
    this.props.testDelete(id);

    localStorage.removeItem("TEST_ID");
    this.props.deactTest();

    this.props.history.push("/testshow");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <h3>Test Name: {this.props.test.testName}</h3>
            <button
              className="btn btn-sm btn-info m-1"
              onClick={this.deactTest}
            >
              &#8592; Back
            </button>
            <button
              onClick={this.handleDelete}
              className="btn btn-sm btn-danger"
            >
              <span>&#9746;</span>
            </button>
            <hr />
            <span>
              Description: <br />
              <span className="border border-info p-1">
                {this.props.test.description}
              </span>
            </span>
          </div>
          <div className="col">
            <h3 className="align-middle">Available Questions</h3>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { testId: state.test.testId, test: state.test.test };
}
//
function mapDispatchToProps(dispatch) {
  return {
    getTest: id => dispatch(actions.getTest(id)),
    deactTest: () => dispatch(actions.deactTest()),
    testDelete: id => dispatch(actions.deleteTest(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestInfo);
