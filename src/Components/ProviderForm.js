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
          <div>2 Details</div>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s2">
                <input
                  name="numOfPeople"
                  id="numOfPeople"
                  type="number"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="numOfPeople" 
                  style={{ 
                    textTransform: "uppercase",
                    fontsize: "6px"
                    
                  }}
                >How many people?</label>
              </div>
            </div>
              
              <div className="row">
                <div className="input-field col s6">
                  <input 
                    name="date" 
                    type="text" 
                    className="datepicker" 
                  />
                  <label for="date">Name of person/people</label>
                </div>
              </div>

              <div className="row">
                <label for="gender">Physical Description</label>
                <div className="btn col s1">
                  <label for="male">Male</label>
                </div>
                <div className="btn col s1">
                  <label for="female">Female</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                  <input 
                    name="phone" 
                    type="tel" 
                    className="datepicker" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />
                  <label for="phone">Contact number</label>
                </div>
              </div>

              <div className="row">
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

                <div className="input-field col s6">
                <input 
                  name="details" 
                  type="text" 
                  className="timepicker" 
                  />
                  <label for="details">Additional Details</label>
                </div>
              </div>

              <a
                className="btn red lighten-1 col s4 right modal-trigger"
                href="#modal1"
              >
                CONTINUE
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
          </form>
        </div>
      </div>
    );
  }
}

export default ProviderForm;
