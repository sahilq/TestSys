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
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              {this.props.tests &&
                this.props.tests.map(test => (
                  <li className="border border-success" key={test._id}>
                    <div className="p-1">
                      {test.testName}

                      {!this.state.invitedPosts.includes(test._id) ? (
                        <button
                          onClick={this.handleClick}
                          className="btn btn-link float-right m-0 p-0"
                          value={test._id}
                        >
                          Invite
                        </button>
                      ) : (
                        <button
                          className="btn btn-link disabled float-right m-0 p-0"
                          value={test._id}
                        >
                          Invited
                        </button>
                      )}
                    </div>
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
