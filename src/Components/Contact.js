import React, { Component } from "react";
import M from "materialize-css";
import submission from "../resources/submission.png";

class Contact extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elem1 = document.querySelectorAll("select");
      const instance1 = M.FormSelect.init(elem1);
      const elem2 = document.querySelectorAll(".characterCounter");
      const instance2 = M.CharacterCounter.init(elem2);
      const elem3 = document.querySelectorAll(".modal");
      const instance3 = M.Modal.init(elem3);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h5 style={{ textTransform: "uppercase", marginTop: "4rem" }}>
            Contact Us
          </h5>
          <h6>We want to hear from you</h6>
          <div className="divider" />
          <br />
          <form className="col l8 s12">
            <div className="row">
              <div className="input-field col s12">
                <select>
                  <option value="" disabled selected>
                    What can we help you with?
                  </option>
                  <option value="1">Dashboards</option>
                  <option value="2">
                    Homeless Management Information System (HMIS)
                  </option>
                  <option value="3">Grievances</option>
                </select>
                <label>Select From The Dropdown Menu</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input type="text" id="firstName" className="validate" />
                <label for="firstName">First Name</label>
              </div>
              <div className="input-field col s6">
                <input type="email" id="email" className="validate" />
                <label for="email">Email</label>
                <span class="helper-text" data-error="Incomplete email address">
                  We will never use your email for marketing purposes.
                </span>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s12">
                <textarea
                  id="textarea1"
                  placeholder="Please tell us about your issue"
                  className="materialize-textarea characterCounter"
                  data-length="120"
                />
                <label for="textarea1">Your Message</label>
              </div>
            </div>
            <a
              className="btn col s4 right modal-trigger"
              style={{ backgroundColor: "#030303" }}
              href="#modal6"
            >
              Submit
            </a>
            <div id="modal6" class="modal">
              <div class="modal-content">
                <h6 style={{ fontWeight: "bolder", textAlign: "center" }}>
                  Your Request Has Been Received:
                </h6>
                <p style={{ textAlign: "center" }}>Case Number - #435531</p>
                <img
                  src={submission}
                  alt="submission"
                  style={{ width: "100%", height: "auto" }}
                />
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
                  <a href="https://www.lahsa.org">HERE</a> for additional
                  assistance
                </p>
              </div>
              <div class="modal-footer">
                <a
                  href="#!"
                  className="modal-close waves-effect waves-green btn-flat"
                  style={{ margin: "0" }}
                >
                  Close
                </a>
              </div>
            </div>
          </form>
          <div className="col l4">
            <h5 style={{ textAlign: "left" }}>Contact Details</h5>
            <p>
              Question, comment or concern? Our contact form is the best way to
              get in touch with someone at LAHSA.
            </p>
            <h6 style={{ textAlign: "left" }}>Address</h6>
            <p style={{ textAlign: "left" }}>
              811 Wilshire Blvd, 6th Floor, Los Angeles, CA 90017
            </p>
            <p>
              Tel: (213) 683-3333
              <br />
              Tel: (213) 553-8488
              <br />
              Tel: (213) 553-8489
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
