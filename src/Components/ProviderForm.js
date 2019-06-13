import React, { Component } from "react";
import firebase from "../config/fbConfig";
import M from "materialize-css";
import { white } from "material-ui/styles/colors";

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
  continue = e =>{
    e.preventDefault();
    this.props.continue();
  }
  render() {
    const {handleChange} = this.props
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "3rem" }}>
          <div>2 Details</div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s4">
                <input name="numOfPeople" id="numOfPeople" type="number" className="validate" onChange={handleChange}/>
                <label for="numOfPeople" 
                  style={{ 
                    textTransform: "uppercase",      
                  }}
                >How many people?</label>
              </div>
            </div>
              
              <div className="row">
                <div className="input-field col s6">
                  <input name="date" type="text" id="name"className="datepicker" onChange={handleChange}/>
                  <label for="date">Name of person/people</label>
                </div>
              </div>

              <div className="row">
                <div for="gender" style={{
                  color: "#9E9E9E",
                  fontSize: "15px",
                  paddingBottom: "1rem"

                }}
                >Gender</div>
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
                    type="tel" 
                    id="number"
                    className="datepicker" 
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
                  id="details"
                  className="timepicker" 
                  onChange={handleChange}
                />
               
                  <label for="details">Additional Details</label>
                </div>
              </div>

              <a className="btn black lighten-1 col s4 right modal-trigger" onClick={this.continue}>
                CONTINUE
              </a>
              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">
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
