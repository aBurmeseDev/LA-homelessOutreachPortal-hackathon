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
    const { handleChange, handleSubmit } = this.props;
    return (
      <div className="row" style={{ margin: "1.5rem" }}>
        <div>Contact</div>

        <div class="row" style={{ marginTop: "2rem" }}>
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

        {/* <button
          className="btn  waves-effect right modal-trigger"
          id="location"
          name="action"
          data-target="modal9"
          style={{ backgroundColor: "#000000	" }}
        >
          Sumbit<i class="material-icons right">send</i>{" "}
        </button> */}
        <a
          className="btn col s4 right modal-trigger"
          style={{ backgroundColor: "#030303" }}
          href="#modal7"
          onClick={handleSubmit}
        >
          Submit
        </a>
        <div id="modal7" class="modal">
          <div class="modal-content">
            <h6 style={{ fontWeight: "bolder", textAlign: "center" }}>
              Your Request Has Been Received:
            </h6>
            <p style={{ textAlign: "center" }}>Case Number - #435531</p>
            {/* <img
              src={submission}
              alt="submission"
              style={{ width: "100%", height: "auto" }}
            /> */}
            <h7
              style={{
                fontWeight: "bolder",
                textAlign: "center",
                marginTop: "1rem"
              }}
            >
              WHAT TO DO NEXT:
            </h7>
            <p>
              1. Follow-Up in 2-3 Business Days on{" "}
              <a href="https://www.lahsa.org">https://www.lahsa.org </a>
              to learn about your status
            </p>
            <p>
              2. Visit LOCATION/RESOURCE{" "}
              <a href="https://www.lahsa.org">HERE</a> for additional assistance
            </p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProviderContact;
