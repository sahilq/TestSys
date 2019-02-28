import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTests } from "../../actions/actionCreators";

class RecHome extends Component {
  state = {};

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
  };

  render() {
    return (
      <div className="constainer">
        <div className="row">
          <div className="col">
            <h3>
              Welcome <small>{this.props.userName}</small>
            </h3>
            <div className="">
              Designation:<span className="ml-3">Recruiter</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
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
)(RecHome);
