import React, { Component } from "react";
import { connect } from "react-redux";

export default OriginalComponent => {
  class MixedComponent extends Component {
    checkAuth() {
      console.log("checking_auth SIGNIN SIGNUP");
      if (this.props.role !== "recruiter") {
        return this.props.history.push("/");
      } else if (this.props.testActive) {
        return this.props.history.push("/testinfo");
      }
    }

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      testActive: state.test.testActive,
      testId: state.test.testId,

      isAuth: state.auth.isAuthenticated,
      jwtToken: state.auth.token,

      role: state.auth.role,
      userName: state.auth.userName,
      userId: state.auth.userId,
      errorMessage: state.auth.errorMessage
    };
  }

  return connect(mapStateToProps)(MixedComponent);
};
