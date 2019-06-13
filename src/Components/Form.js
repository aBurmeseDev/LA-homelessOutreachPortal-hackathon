import React, { Component } from "react";
import firebase from "../config/fbConfig.js";
import M from "materialize-css";
import { conditionalExpression } from "@babel/types";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",

    image: null,
    url: null
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elem = document.querySelectorAll(".modal");
      const instance = M.Modal.init(elem);
      const elem1 = document.querySelectorAll("select");
      const instance1 = M.FormSelect.init(elem1);
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

    const { firstName, lastName, image, url } = this.state;
    if (image) {
      const uploadTask = firebase
        .storage()
        .ref(`images/${image.name}`)
        .put(image);
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
            .then(picUrl => {
              console.log(picUrl);
              const requestRef = firebase.firestore().collection("requests");
              const request = {
                firstName: firstName,
                lastName: lastName,
                url: picUrl
              };
              console.log(request);
              requestRef.add(request);
              this.setState(
                {
                  url: picUrl
                },
                () => {}
              );
            });
        }
      );
    }
    this.setState({
      firstName: "",
      lastName: "",
      url: null
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "3rem" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="firstName"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>

              <div className="row">
                <div for="gender" style={{
                  color: "#9E9E9E",
                  fontSize: "15px",
                  paddingBottom: "1rem"

                }}
                >Gender</div>
                <form action="#">
                  <p>
                    <label>
                      <input name="group1" type="radio" />
                      <span>Male</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input name="group1" type="radio" />
                      <span>Female</span>
                    </label>
                  </p>
                </form>
              </div>

              <div className="input-field col s6">
                <select multiple>
                  <option value="" disabled>What do you need?</option>
                  <option value="1">Food</option>
                  <option value="2">Clothing</option>
                  <option value="3">Water</option>
                  <option value="4">Shelter</option>
                  <option value="5">Medical Services</option>
                  <option value="6">Other</option>
                </select>
                  <label>Select all that apply</label>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    placeholder="Please specify"
                    className="materialize-textarea characterCounter"
                    data-length="120"
                  />
                  <label for="textarea1">If other, please specify</label>
                </div>
              </div>

              <div className="input-field col s6">
                <select>
                  <option value="" disabled selected>Select below</option>
                  <option value="1">Under 6 months</option>
                  <option value="2">6-12 months</option>
                  <option value="3">2+ years</option>
                  <option value="4">5+ years</option>
                  <option value="5">I don't know</option>
                </select>
                  <label>How long have you been experiencing homelessness?</label>
              </div>

              <div className="input-field col s6">
                <select>
                  <option value="" disabled selected>Select below</option>
                  <option value="1">Tent</option>
                  <option value="2">Vehicle</option>
                  <option value="3">Street</option>
                  <option value="4">Other</option>
                </select>
                  <label>Where do you currently reside?</label>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    placeholder="Please specify"
                    className="materialize-textarea characterCounter"
                    data-length="120"
                  />
                  <label for="textarea1">If other, please specify</label>
                </div>
              </div>



              <div className="row" />

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
              <a
                className="btn col s4 right modal-trigger"
                style = {{ backgroundColor: "#030303" }}
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
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Form
