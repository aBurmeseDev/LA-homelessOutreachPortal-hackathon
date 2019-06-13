import React, { Component } from "react";
import firebase from "../config/fbConfig";
import M from "materialize-css";

class ProviderForm extends Component {
  state = {
    location: "",
    date: "",
    time: "",
    service: "",
    email: ""
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elem1 = document.querySelectorAll(".dropdown-trigger");
      const instance1 = M.Dropdown.init(elem1);
      const elem2 = document.querySelectorAll(".datepicker");
      const instance2 = M.Datepicker.init(elem2);
      const elem3 = document.querySelectorAll(".timepicker");
      const instance3 = M.Timepicker.init(elem3);
      const elem4 = document.querySelectorAll(".modal");
      const instance4 = M.Modal.init(elem4);
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const requestRef = firebase.firestore().collection("requests");
    const request = {
      location: this.state.location
    };

    requestRef.add(request);
    this.setState({
      location: ""
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "3rem" }}>
          <div>2 DETAILS</div>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s2">
                <input
                  name="numOfPeople"
                  id="numOfPeople"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="numOfPeople">How many people?</label>
              </div>

              <div className="input-field col s6">
                <input name="date" type="text" className="datepicker" />
                <label for="date">Date last seen</label>
              </div>

              <div className="input-field col s3">
                <div className="waves-effect btn-small">Male</div>
                <div className="waves-effect btn-small">Female</div>
              </div>

              <div className="input-field col s6">
                <input 
                  name="details" 
                  type="text" 
                  className="timepicker" 
                />
                <label for="details">Additional Details</label>
              </div>

                <div className="input-field col s6">
                  <input
                    name="needs"
                    id="needs"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                  />
                  <label for="needs">Service needed</label>
                </div>

              
              












              {/* <a
                className="dropdown-trigger btn col s4 left"
                href="#dropdown1"
                data-target="dropdown1"
              >
                Services
              </a>

              <ul id="dropdown1" className="dropdown-content">
                <li>
                  <a href="#!">Showers</a>
                </li>
                <li className="divider" tabindex="-1" />
                <li>
                  <a href="#!">Clothes</a>
                </li>
                <li className="divider" tabindex="-1" />
                <li>
                  <a href="#!">Shelters</a>
                </li>
              </ul> */}
              <a className="btn red lighten-1 col s4 right modal-trigger" href="#modal1">
                Submit
              </a>
              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                  <a
                    href="#!"
                    className="modal-close waves-effect waves-green btn-flat"
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

export default ProviderForm;
