import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTests } from "../actions/actionCreators";

class TestShow extends Component {
  componentWillMount = () => {
    this.props.fetchTestsAll();
  };

  render() {
    console.log("component", this.props.tests);
    return (
      <div>
        <ul className="list-group">
          {this.props.tests.map(test => (
            <li key={test._id}>
              <button className="btn btn-sm btn-primary m-1">
                {test.testName}
              </button>
              {test.description}
            </li>
          ))}
        </ul>
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
