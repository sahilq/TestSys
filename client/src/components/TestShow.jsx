import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTests } from "../actions/actionCreators";

import * as actions from "../actions/actionCreators";

class TestShow extends Component {
  componentWillMount = () => {
    this.props.fetchTestsAll();
  };

  handleClick = e => {
    this.setState({ child: null });
    let select = e.target.value;
    this.props.history.push({
      pathname: "/testinfo",

      state: { detail: select }
    });
    // this.props.testEditReq(select);
  };
  render() {
    console.log("component", this.props.tests);
    return (
      <div>
        <select onChange={this.handleClick} className="list-group">
          <option>Select Test:</option>
          {this.props.tests.map(test => (
            <option
              value={test._id}
              className="badge badge-info badge-pill"
              key={test._id}
            >
              {test.testName}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    tests: state.test.tests
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchTestsAll: () => dispatch(fetchTests())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestShow);
