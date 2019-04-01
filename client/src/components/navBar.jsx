import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signOutReq } from "../actions/actionCreators";

class Header extends Component {
  constructor() {
    super();
    this.signOut = this.signOut.bind(this);
  }
  async signOut() {
    await this.props.signOut();
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand mb-1"
        style={{
          backgroundImage:
            "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"
        }}
      >
        <Link className="navbar-brand text-white" to="/">
          HOME
        </Link>

        <div className=" collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {this.props.isAuth && this.props.role === "recruiter" ? (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/testinit">
                  Create Test
                </Link>
              </li>
            ) : null}
          </ul>

          <ul className="nav navbar-nav ml-auto">
            {!this.props.isAuth
              ? [
                  <li className="nav-item" key="signup">
                    <Link className="nav-link text-white" to="/signup">
                      Sign Up
                    </Link>
                  </li>,
                  <li className="nav-item" key="signin">
                    <Link className="nav-link text-white" to="/signin">
                      Sign In
                    </Link>
                  </li>
                ]
              : null}
            {this.props.isAuth ? (
              <li className="nav-item ">
                <Link
                  className="nav-link text-white"
                  to="/signin"
                  onClick={this.signOut}
                >
                  Sign Out
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(signOutReq())
  };
}
function mapstateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated,
    role: state.auth.role
  };
}
export default connect(
  mapstateToProps,
  mapDispatchToProps
)(Header);
