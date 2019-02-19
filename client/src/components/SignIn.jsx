import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { signInReq } from "../actions/actionCreators";

class SignIn extends Component {
  state = { email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.signIn(this.state);
    this.setState({ email: "", password: "" });
  };
  componentDidMount() {}
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
              {this.props.errorMessage ? (
                <div className="alert alert-danger">
                  {this.props.errorMessage}
                </div>
              ) : null}
              <button type="submit" className="btn btn-primary">
                Sign In
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
    errorMessage: state.auth.errorMessage
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signIn: data => dispatch(signInReq(data))
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignIn);
