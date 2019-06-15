import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProviderContact from "./ProviderContact";
import ProviderForm from "./ProviderForm";
import ProviderLocation from "./ProviderLocation";
import firebase from "../config/fbConfig";
import "./Provider.css";

class Provider extends Component {
  state = {
    component: 1,
    address: null,
    date: "", //
    service: "", //
    number: "", //
    numOfPeople: "", //
    details: "", //
    contactName: "", //
    contactCompany: "", //
    contactEmail: "", //
    contactPhone: "" //
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("will try to submit");
    const requestRef = firebase.firestore().collection("requests");
    const request = {
      ...this.state
    };
    console.log(request);

    requestRef.add(request);
    this.props.history.push("/");
  };
  changeComponent = e => {
    if (e.target.innerHTML == "Location") {
      this.setState({ component: 1 });
    } else if (e.target.innerHTML == "Details") {
      this.setState({ component: 2 });
    } else {
      this.setState({ component: 3 });
    }
    console.log(this.state);
  };
  getLocation = info => {
    this.setState({ address: info });
    console.log(this.state);
  };
  nextComp = () => {
    const { component } = this.state;
    this.setState({
      component: component + 1
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="nav">
            <div
              className="nav-wrapper"
              style={{
                textAlign: "center",
                backgroundColor: "white"
              }}
            >
              <div className="col s12">
                <a className="breadcrumb">
                  <Link
                    onClick={this.changeComponent}
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      color: "#9E9E9E",
                      textDecoration: "bold"
                    }}
                  >
                    Location
                  </Link>
                </a>
                <a className="breadcrumb">
                  <Link
                    onClick={this.changeComponent}
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      color: "#9E9E9E"
                    }}
                  >
                    Details
                  </Link>
                </a>
                <a className="breadcrumb">
                  <Link
                    onClick={this.changeComponent}
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      color: "#9E9E9E"
                    }}
                  >
                    Contact
                  </Link>
                </a>
              </div>
            </div>
          </nav>
          <div className="formContainer" />
          {this.state.component == 1 ? (
            <ProviderLocation
              continue={this.nextComp}
              getAddress={this.getLocation}
            />
          ) : this.state.component == 2 ? (
            <ProviderForm
              continue={this.nextComp}
              handleChange={this.handleChange}
            />
          ) : (
            <ProviderContact
              continue={this.nextComp}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default Provider;
