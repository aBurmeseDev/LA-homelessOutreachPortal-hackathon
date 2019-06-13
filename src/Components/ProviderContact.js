import React, { Component } from "react";
import M from "materialize-css";

class ProviderContact extends Component {
  state = {};
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems);
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "3rem" }}>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="role"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="role">ROLE</label>
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
