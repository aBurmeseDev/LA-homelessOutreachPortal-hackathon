import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="row" style={{ marginTop: "5rem" }}>
        <button className="btn waves-effect col l6">Homeless</button>
        <button className="btn waves-effect col l6">Providers</button>
      </div>
    );
  }
}

export default Home;
