import React, { Component } from "react";
import M from "materialize-css";

class ProviderContact extends Component {
  state = {};
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".dropdown-trigger");
      const instances = M.Dropdown.init(elems);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "3rem" }}>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <a
                  className="dropdown-trigger btn"
                  href="#dropdown5"
                  data-target="#dropdown5"
                >
                  Drop Me!
                </a>
                <ul id="dropdown5" className="dropdown-content">
                  <li>
                    <a href="#!">one</a>
                  </li>
                  <li>
                    <a href="#!">two</a>
                  </li>
                </ul>
              </div>
              <div className="input-field col s12">
                <input
                  id="name"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="name">YOUR NAME</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="company"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="company">COMPANY/AFFILIATION</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="email">EMAIL</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="phone"
                  type="number"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="phone">PHONE</label>
              </div>
              <a href="#!" className="btn red lighten-1 right">
                SUBMIT
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ProviderContact;
