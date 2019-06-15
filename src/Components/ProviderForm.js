import React, { Component } from "react";
import firebase from "../config/fbConfig";
import M from "materialize-css";
import { white } from "material-ui/styles/colors";
import "./ProviderForm.css";
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
  // handleChange = e => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   });
  // };
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
  continue = e => {
    e.preventDefault();
    this.props.continue();
  };
  render() {
    const { handleChange } = this.props;
    return (
      <div className="row" style={{ margin: "1.5rem" }}>
        <div>Details</div>
        <div className="row" style={{ marginTop: "1rem" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s4">
                <input
                  name="numOfPeople"
                  id="numOfPeople"
                  type="text"
                  className="validate"
                  onChange={handleChange}
                />
                <label for="numOfPeople">Number of people</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  name="name"
                  type="text"
                  id="name"
                  className="validate"
                  onChange={handleChange}
                />
                <label for="name">Name of person/people</label>
              </div>
            </div>

            <div className="row">
              <div
                for="gender"
                style={{
                  color: "#9E9E9E",
                  fontSize: "15px",
                  paddingBottom: "1rem"
                }}
              >
                Gender
              </div>
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
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>I don't know</span>
                  </label>
                </p>
              </form>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  name="phone"
                  type="text"
                  id="number"
                  className="validate"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  onChange={handleChange}
                />
                <label for="phone">Contact number</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  name="needs"
                  id="service"
                  type="text"
                  className="validate"
                  onChange={handleChange}
                />
                <label for="needs">Service needed</label>
              </div>

              <div className="input-field col s6">
                <input
                  name="details"
                  type="text"
                  className="timepicker"
                  onChange={handleChange}
                />

                <label for="details">Additional Details</label>
              </div>
            </div>

            <button
              className="btn waves-effect  right"
              onClick={this.continue}
              type="submit"
              name="action"
              style={{ marginTop: "2rem", backgroundColor: "#000000" }}
            >
              Continue
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProviderForm;
