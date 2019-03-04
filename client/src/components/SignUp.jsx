import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../actions/actionCreators";

class SignUp extends Component {
  state = { email: "", name: "", password: "", role: "" };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state);
    this.setState({ email: "", password: "", name: "", role: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md" />
          <div className="col-md" />
          <div className="col-md" />
        </div>
        <div className="row">
          <div className="col-md" />
          <div className="col-md mt-5 p-5">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={this.state.email}
                  placeholder="Your Email"
                  required={true}
                  autoComplete="off"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  autoComplete="off"
                  required={true}
                  value={this.state.name}
                  placeholder="Your Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  autoComplete="off"
                  required={true}
                  value={this.state.password}
                  placeholder="Your Password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <select id="role" onChange={this.handleChange}>
                  <option className="form-control" value="participant">
                    Participant
                  </option>
                  <option className="form-control" value="recruiter">
                    Recruiter
                  </option>
                </select>
              </div>
              {this.props.errorMessage ? (
                <div className="alert alert-danger">
                  {this.props.errorMessage}
                </div>
              ) : null}
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
          <div className="col-md" />
        </div>
        <div className="row">
          <div className="col-md" />
          <div className="col-md" />
          <div className="col-md" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.regErrorMessage,
    isAuth: state.auth.isAuthenticated
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signUp: data => dispatch(actions.signUpReq(data))
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignUp);
