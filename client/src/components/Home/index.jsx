/////////////////////////
// TO BE CREATED HOME PAGE[ ]
/////////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles.css";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <div className="row-12" id="imgDiv">
          <div className="col" id="contentDiv">
            <p>Description : Simple quiz App Developed using React</p>
            <h4>Please Login to continue</h4>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  role: PropTypes.string,
  isAuth: PropTypes.bool
};

function mapStateTopProps(state) {
  return {
    role: state.auth.role,
    isAuth: state.auth.isAuthenticated
  };
}

function mapDispatchTopProps(dispatch) {
  return {};
}

export default connect(
  mapStateTopProps,
  mapDispatchTopProps
)(Home);
