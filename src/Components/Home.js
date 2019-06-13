import React, { Component } from "react";
import landingImg from "../resources/landing-banner.png";
import heart from "../resources/heart.png";
import hospital from "../resources/hospital.png";
import police from "../resources/police.png";
import tent from "../resources/tent.png";
import truck from "../resources/truck.png";
import "./Home.css";
import About from "./About";
import ProviderForm from "./ProviderForm";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="request">
          <button className="help">Looking to help</button>
          <button className="service">Looking for services</button>
        </div>
        <div style={{ position: "relative" }}>
          <img
            src={landingImg}
            alt="share"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", top: "5%", left: "10%" }}>
            <h5 style={{ color: "white" }}>HOW WE WORK?</h5>
            <span style={{ color: "white" }}>
              WE CONNECT PEOPLE IN NEED TO SERVICES AND HOUSING{" "}
            </span>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <div
            style={{
              width: "20rem",
              height: "20rem",
              borderTospan: "1px solid black",
              borderBottom: "1px solid black",
              margin: "0 auto",
              marginTop: "2rem"
            }}
          >
            video
          </div>

          <div className="row">
            <div>
              <div className="col s3 left" style={{ marginRight: "1rem" }}>
                <img 
                  src={heart}
                  alt="heart"
                  style={{ height: "5rem" }}
                />
              </div>
              <p className="col s9 right" style={{ textAlign: "left" }}>
                LA-HOP is designed to assist people experiencing homelessness in
                Los Angeles County with outreach services. We’ll use this
                information to dispatch a homeless services outreach team to the
                area.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s9 right">
              <p style={{ textAlign: "left" }}>
                For medical or mental health emergencies, please call 911.
              </p>
            </div>
            <div className="col s3 left" style={{ marginRight: "1rem" }}>
              <img 
                src={hospital}
                alt="hospital"
                style={{ height: "5rem" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s9 right">
              <p style={{ textAlign: "left" }}>
                For crime or illegal activity, please contact your local law
                enforcement agency.
              </p>
            </div>
            <div className="col s3 left" style={{ marginRight: "1rem" }}>
              <img 
                src={police}
                alt="police"
                style={{ height: "5rem" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s9 right">
              <p style={{ textAlign: "left" }}>
                For services like bulky item pickup, illegal dumping or graffiti
                removal, please contact your municipality.
              </p>
            </div>
            <div className="col s3 left" style={{ marginRight: "1rem" }}>
              <img 
                src={truck}
                alt="truck"
                style={{ height: "5rem" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s9 right">
              <p style={{ textAlign: "left" }}>
                LA-HOP does not replace homeless encampment reporting protocols.
                Please contact your municipality.
              </p>
            </div>
            <div className="col s3 left" style={{ marginRight: "1rem" }}>
              <img 
                src={tent}
                alt="tent"
                style={{ height: "5rem" }}
              />
            </div>
          </div>
        </div>
        <About />
      </div>
    );
  }
}

export default Home;
