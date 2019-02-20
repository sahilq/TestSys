import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions/actionCreators";

class TestInfo extends Component {
  state = {
    isEditing: false,
    testName: "",
    description: ""
  };
  componentDidMount = () => {
    console.log("history params", this.props.location.state.detail);

    let id = this.props.location.state.detail;
    localStorage.setItem("TEST_ID", id);
    this.props.getTest(id);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  deactTest = e => {
    localStorage.removeItem("TEST_ID");
    this.props.deactTest();
    this.props.fetchTestsAll();
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

  handleSubmit = e => {
    e.preventDefault();
    const data = {};
    if (this.state.testName !== "") {
      data.testName = this.state.testName;
    }
    if (this.state.description !== "") {
      data.description = this.state.description;
    }
    if (data.description || data.testName) {
      console.log(data);
      const id = this.props.test._id;
      this.props.editTest(id, data);
      this.editMode();
    } else {
      console.log("nothing");
      this.editMode();
    }
    this.setState({ testName: "", description: "" });
  };

  editMode = () => {
    if (this.state.isEditing) {
      this.setState({ isEditing: false });
    } else {
      this.setState({ isEditing: true });
    }
  };

  render() {
    return (
      <div className="container">
        {!this.state.isEditing ? (
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
              <button
                onClick={this.editMode}
                className="btn btn-sm btn-warning m-1"
              >
                <span>Edit</span>
              </button>
              <hr />
              <span>
                Description: <br />
                <div className="border border-info p-1">
                  {this.props.test.description}
                </div>
              </span>
            </div>
            <div className="col">
              <h3 className="align-middle">Available Questions</h3>
            </div>
          </div>
        ) : (
          <div className="col">
            <h4>Edit Test Info:</h4>{" "}
            <button
              onClick={this.editMode}
              className="btn btn-sm btn-warning m-1"
            >
              <span>Cancel</span>
            </button>
            <form className="p-1" onSubmit={this.handleSubmit}>
              <div className="form-row m-1">
                <input
                  className="form-control col"
                  type="text"
                  placeholder="Change Name"
                  id="testName"
                  autoComplete="off"
                  value={this.state.testName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-row">
                <div className="col">
                  <textarea
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Change Description "
                    id="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                  />
                </div>
              </div>
              <input type="submit" className="btn btn-primary btn-sm m-1" />
            </form>
          </div>
        )}
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
    testDelete: id => dispatch(actions.deleteTest(id)),
    fetchTestsAll: () => dispatch(actions.fetchTests()),
    editTest: (id, data) => dispatch(actions.editTestReq(id, data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestInfo);
