import React, { Component } from "react";
import { connect } from "react-redux";

export default OriginalComponent => {
  class MixedComponent extends Component {
    checkAuth() {
      if (this.props.isAuth && this.props.role === "recruiter") {
        return this.props.history.push("/testshow");
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
