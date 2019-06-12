import React, { Component } from "react";
import firebase from "../config/fbConfig";
import M from "materialize-css";

class ProviderForm extends Component {
  state = {
    name: "",
    lastName: ""
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".dropdown-trigger");
      const instances = M.Dropdown.init(elems);
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
                  id="location"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label for="first_name">Location</label>
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
                    <a href="#!">one</a>
                  </li>
                  <li>
                    <a href="#!">two</a>
                  </li>
                  <li class="divider" tabindex="-1" />
                  <li>
                    <a href="#!">three</a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="material-icons">view_module</i>four
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="material-icons">cloud</i>five
                    </a>
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
