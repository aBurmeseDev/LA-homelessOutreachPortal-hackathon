import React, { Component } from "react";
import firebase from "../config/fbConfig.js";

class Form extends Component {
  state = {
    name: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const requestRef = firebase.firestore().collection("requests");
    const request = {
      name: this.state.name,
      lastName: this.state.lastName
    };

    requestRef.add(request);
    this.setState({
      name: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <button className="btn red lighten-1">Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
