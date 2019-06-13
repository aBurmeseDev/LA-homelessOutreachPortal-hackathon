import React, { Component } from "react";
import M from "materialize-css";

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
          <h4>Contact Us</h4>
          <h5>We want to hear from you</h5>
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
                  <option value="4">Homeless Count</option>
                  <option value="5">Homeless Services</option>
                  <option value="6">LA-HOP</option>
                  <option value="7">
                    Notices of Funding Availability (NOFAs)
                  </option>
                  <option value="8">Outcomes/Reporting</option>
                  <option value="9">Procurement Opportunities</option>
                  <option value="10">Technical Web Support</option>
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
                <input type="text" id="lasttName" className="validate" />
                <label for="lastName">Last Name</label>
              </div>
              <div className="input-field col s10">
                <input type="email" id="email" className="validate" />
                <label for="email">Email</label>
                <span class="helper-text" data-error="Incomplete email address">
                  We will never use your email for marketing purposes.
                </span>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s10">
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
              className="btn red lighten-1 col s4 right modal-trigger"
              href="#modal3"
            >
              Submit
            </a>
            <div id="modal3" class="modal">
              <div class="modal-content">
                <h4>Thank you for contacting us</h4>
                <p>A bunch of text</p>
              </div>
              <div class="modal-footer">
                <a
                  href="#!"
                  class="modal-close waves-effect waves-green btn-flat"
                >
                  Agree
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
