import React, { Component } from "react";
import M from "materialize-css";

class ProviderContact extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".modal");
      const instances = M.Modal.init(elems);
    });
  }
  continue = e => {
    this.props.continue();
  };
  render() {
    const { handleChange } = this.props;
    return (
      <div className="row">
        <div>3 Contact</div>

        <div class="row">
          <div class="input-field col s12">
            <input
              id="contactName"
              onChange={handleChange}
              type="text"
              class="validate"
            />
            <label class="active" for="contactName">
              Your Name
            </label>
          </div>
          <div class="input-field col s12">
            <input
              id="contactCompany"
              onChange={handleChange}
              type="text"
              class="validate"
            />
            <label class="active" for="company">
              Company/Affiliation
            </label>
          </div>
          <div class="input-field col s12">
            <input
              id="contactEmail"
              onChange={handleChange}
              type="text"
              class="validate"
            />
            <label class="active" for="company">
              Email
            </label>
          </div>
          <div class="input-field col s12">
            <input
              id="contactPhone"
              onChange={handleChange}
              type="text"
              class="validate"
            />
            <label class="active" for="company">
              Phone
            </label>
          </div>
        </div>

        <button
          className="btn  waves-effect right modal-trigger"
          id="location"
          name="action"
          data-target="modal9"
          style={{ backgroundColor: "#000000	" }}
        >
          Sumbit<i class="material-icons right">send</i>{" "}
        </button>
        <div id="modal9" className="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProviderContact;
