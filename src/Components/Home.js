import React, { Component } from "react";
import landingImg from "../resources/landingimg.jpg";
class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ position: "relative" }}>
          <img
            src={landingImg}
            alt="share"
            style={{ width: "100%", height: "auto" }}
          />
          <button
            style={{
              position: "absolute",
              top: "90%",
              left: "15%",
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "5px"
            }}
          >
            Need help?
          </button>
          <button
            style={{
              position: "absolute",
              top: "90%",
              left: "60%",
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "5px"
            }}
          >
            Provider
          </button>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <h4 style={{ marginTop: "4rem" }}>How we work</h4>
          <div
            style={{
              width: "20rem",
              height: "20rem",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              margin: "0 auto"
            }}
          >
            video
          </div>
          <h6>what we provide</h6>
          <div className="row">
            <div className="col l4 s4" style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            </div>
            <div className="col l4 s4" style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            </div>
            <div className="col l4 s4" style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "5rem" }}>
          <button className="btn waves-effect col l6">Homeless</button>
          <button className="btn waves-effect col l6">Providers</button>
        </div>
      </div>
    );
  }
}

export default Home;
