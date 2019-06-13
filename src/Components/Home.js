import React, { Component } from "react";
import landingImg from "../resources/landing-banner.png";
import paper from "../resources/paper.png";
import mail from "../resources/mail.png";
import message from "../resources/message.png";
import "./Home.css";
import About from "./About";
import ProviderForm from "./ProviderForm";

class Home extends Component {
  render() {
    return (
      <div>
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
        <div className="request">
          <a className="btn help" href="/report" style={{ color: "#ff3300" }}>
            Looking to help
          </a>
          <a
            className="btn service"
            href="/request"
            style={{ color: "#ff3300" }}
          >
            Looking for services
          </a>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <div
            style={{
              width: "20rem",
              height: "12rem",
              borderTospan: "1px solid black",
              margin: "0 auto",
              marginTop: "2rem",
              marginBottom: "2rem"
            }}
          >
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/g4vQjsSa3uY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>

          <h6
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              marginBottom: "2rem"
            }}
          >
            Helping others doesn't have to be hard
          </h6>
          <div className="row">
            <div className="row">
              <div className="col s6">
                <img src={paper} alt="paper" />
              </div>
              <div className="col s6">
                <img src={message} alt="message" />
              </div>
            </div>
            <div className="col s6 " style={{ textAlign: "left" }}>
              See someone in need? Fill out an outreach request
            </div>
            <div className="col s6" style={{ textAlign: "left" }}>
              Alert an outreach team about an individual’s well-being.
            </div>

            <div className="row">
              <div className="col s3" />
              <div className="col s5" style={{ marginTop: "2rem" }}>
                <img src={mail} alt="mail" />
              </div>
              <div className="col s3" />
            </div>

            <div className="row">
              <div className="col s3" />
              <div className="col s6" style={{ textAlign: "left" }}>
                Keep up to date. By providing an email address, we’ll keep you
                updated on any progress.
              </div>
              <div className="col s3" />
            </div>
          </div>
          {/* <div className="row">
            <div>
              <div className="col s3 left" style={{ paddingTop: "1rem" }}>
                <img src={heart} alt="heart" style={{ height: "3rem" }} />
              </div>
              <p className="col s9 right" style={{ textAlign: "left" }}>
                LA-HOP is designed to assist people experiencing homelessness in
                Los Angeles County with outreach services. We’ll use this
                information to dispatch a homeless services outreach team to the
                area.
              </p>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col s9 right">
              <p style={{ textAlign: "left" }}>
                For medical or mental health emergencies, please call 911.
              </p>
            </div>
            <div className="col s3 left" style={{ paddingTop: "1rem" }}>
              <img src={hospital} alt="hospital" style={{ height: "3rem" }} />
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col s9 right">
              <p style={{ textAlign: "left" }}>
                For crime or illegal activity, please contact your local law
                enforcement agency.
              </p>
            </div>
            <div className="col s3 left" style={{ paddingTop: "1rem" }}>
              <img src={police} alt="police" style={{ height: "3rem" }} />
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col s9 right">
              <p style={{ textAlign: "left" }}>
                For services like bulky item pickup, illegal dumping or graffiti
                removal, please contact your municipality.
              </p>
            </div>
            <div className="col s3 left" style={{ paddingTop: "1rem" }}>
              <img src={truck} alt="truck" style={{ height: "3rem" }} />
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col s9 right">
              <p style={{ textAlign: "left" }}>
                LA-HOP does not replace homeless encampment reporting protocols.
                Please contact your municipality.
              </p>
            </div>
            <div className="col s3 left" style={{ paddingTop: "1rem" }}>
              <img src={tent} alt="tent" style={{ height: "3rem" }} />
            </div>
          </div> */}
        </div>
        <About />
        <div className="request">
          <a className="btn help" href="/report" style={{ color: "#ff3300" }}>
            Looking to help
          </a>
          <a
            className="btn service"
            href="/request"
            style={{ color: "#ff3300" }}
          >
            Looking for services
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
