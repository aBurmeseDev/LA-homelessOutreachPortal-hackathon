import React, { Component } from "react";
import Map from "../Components/Map";
import M from "materialize-css";

class ProviderLocation extends Component {
  state = {
    address: null
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".datepicker");
      const instances = M.Datepicker.init(elems);
      const elem2 = document.querySelectorAll(".characterCounter");
      const instance2 = M.CharacterCounter.init(elem2);
    });
  }

  continue = e => {
    e.preventDefault();
    this.props.continue();
  };

  render() {
    const { handleChange } = this.props;
    return (
      <div className="row">
        <div>1 Location</div>
        <div className="row" style={{ position: "relative" }}>
          <Map />
        </div>

        <div className="row" style={{ marginTop: "20rem" }}>
          <div className="row">
            <div className="col s6 l6">
              <label for="datepicker">DATE LAST SEEN</label>
              <input type="text" class="datepicker" />
            </div>
            <div className="col s6">
              <label>SEEN BEFORE?</label>
              <form action="#" style={{ display: "flex" }}>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span style={{ paddingRight: "10px" }}>YES </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>NO </span>
                  </label>
                </p>
              </form>
            </div>
            <div className="col s12">
              {" "}
              <label>SEEN BEFORE?</label>
              <form action="#" style={{ display: "flex" }}>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span style={{ paddingRight: "6px" }}>STREET </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span style={{ paddingRight: "6px" }}>TENT </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span style={{ paddingRight: "6px" }}>VEHICLE </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span style={{ paddingRight: "6px" }}>OTHER </span>
                  </label>
                </p>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col s12" />
          </div>
          <div className="row">
            <div className="col s12">
              <label for="textarea">DESCRIPTION OF LOCATION</label>
              <textarea
                id="textarea1"
                className="materialize-textarea characterCounter"
                data-length="120"
              />
            </div>
          </div>
          <button
            className="btn waves-effect  right"
            onClick={this.continue}
            type="submit"
            id="location"
            name="action"
            style={{ marginTop: "0.1rem", backgroundColor: "#ff3300" }}
          >
            Continue
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}

export default ProviderLocation;
