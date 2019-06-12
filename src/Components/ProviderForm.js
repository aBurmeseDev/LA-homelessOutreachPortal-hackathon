import React, { Component } from "react";
import firebase from "../config/fbConfig";
import M from "materialize-css";

class ProviderForm extends Component {
  state = {
    location: ""
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elem1 = document.querySelectorAll(".dropdown-trigger");
      const instance1 = M.Dropdown.init(elem1);
      const elem2 = document.querySelectorAll(".datepicker");
      const instance2 = M.Datepicker.init(elem2);
      const elem3 = document.querySelectorAll(".timepicker");
      const instance3 = M.Timepicker.init(elem3);
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
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="location"
                  id="location"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="location">Location</label>
              </div>
              <div className="input-field col s6">
                <input type="text" class="datepicker" />
                <label for="date">Date last seen</label>
              </div>
              <div className="input-field col s6">
                <input type="text" class="timepicker" />
                <label for="time">Time last seen</label>
              </div>

              <div class="input-field col s6">
                <a
                  class="dropdown-trigger btn"
                  href="#dropdown1"
                  data-target="dropdown1"
                >
                  Services
                </a>

                <ul id="dropdown1" class="dropdown-content">
                  <li>
                    <a href="#!">Showers</a>
                  </li>
                  <li class="divider" tabindex="-1" />
                  <li>
                    <a href="#!">Clothes</a>
                  </li>
                  <li class="divider" tabindex="-1" />
                  <li>
                    <a href="#!">Shelters</a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn red lighten-1">Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProviderForm;
