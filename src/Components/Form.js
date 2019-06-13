import React, { Component } from "react";
import firebase from "../config/fbConfig.js";
import M from "materialize-css";

class Form extends Component {
  state = {
    name: "",
    lastName: "",
    image: null
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elem = document.querySelectorAll(".modal");
      const instance = M.Modal.init(elem);
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleImage = e => {
    const image = e.target.files[0];
    this.setState({ image: image });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);
    const requestRef = firebase.firestore().collection("requests");
    const request = {
      name: this.state.name,
      lastName: this.state.lastName
    };
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
          });
      }
    );
    requestRef.add(request);
    this.setState({
      name: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "3rem" }}>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea2"
                    className="materialize-textarea"
                    data-length="120"
                  />
                  <label htmlFor="textarea2">Textarea</label>
                </div>
              </div>
              <div className="input-field col s6">
                <div className="file-field input-field">
                  <div className="red btn">
                    <span>File</span>
                    <input type="file" onChange={this.handleImage} multiple />
                  </div>
                  <div className="file-path-wrapper">
                    <input
                      className="file-path validate"
                      type="text"
                      placeholder="Upload one or more files"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="btn red lighten-1 col s4 right modal-trigger"
              href="#modal2"
            >
              Submit
            </a>
            <div id="modal2" class="modal">
              <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>
              <div class="modal-footer">
                <a
                  href="#!"
                  class="modal-close waves-effect waves-green btn-flat"
                >
                  Agree
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
