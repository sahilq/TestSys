import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class CreateInvite extends Component {
  state = {
    invitedPosts: []
  };
  componentDidMount = () => {
    axios
      .get(
        "http://localhost:5000/invite/getinvites/" + this.props.participantId
      )
      .then(res => {
        let posts = [];
        res.data.map(el => {
          posts.push(el.testId);
        });
        console.log("post map", posts);
        this.setState({ invitedPosts: [...posts] });
      });
  };

  handleClick = e => {
    const data = {
      testId: e.target.value,
      participantId: this.props.participantId
    };
    axios.post("http://localhost:5000/invite/createinvite", data).then(res => {
      const list = [];
      list.push(res.data.testId);
      this.setState({ invitedPosts: [...list] });
    });
    console.log(this.state.invitedPosts);
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              {this.props.tests &&
                this.props.tests.map(test => (
                  <li key={test._id}>
                    <span>{test.testName}</span>
                    <span>
                      {!this.state.invitedPosts.includes(test._id) ? (
                        <button
                          onClick={this.handleClick}
                          className="btn btn-link ml-auto float-right"
                          value={test._id}
                        >
                          Invite
                        </button>
                      ) : null}
                    </span>
                  </li>
                ))}
            </ul>
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
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateInvite);
