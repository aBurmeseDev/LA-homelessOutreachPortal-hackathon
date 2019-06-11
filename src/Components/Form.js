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
          <form onSubmit={this.handleSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="name"
                  onChange={this.handleChange}
                  className="materialize-textarea"
                />
                <label htmlFor="textarea1">Name</label>
              </div>
              <div className="input-field col s12">
                <textarea
                  id="lastName"
                  onChange={this.handleChange}
                  className="materialize-textarea"
                />
                <label htmlFor="textarea1">Last Name</label>
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
