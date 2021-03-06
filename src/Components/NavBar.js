import React, { Component } from "react";
import * as routes from "../constants/routes";
import { NavLink } from "react-router-dom";
import { isExpressionWrapper } from "@babel/types";
import M from "materialize-css";
import "./NavBar.css";

class NavBar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      const elem1 = document.querySelectorAll(".dropdown-trigger");
      const instance1 = M.Dropdown.init(elem1);
    });
  }
  render() {
    return (
      <nav
        className="nav-center darken-3"
        style={{
          backgroundColor: "rgba(226, 42, 0, 0.85)",
          display: "flex",
          justifyContent: "space-evenly",
          lineHeight: "34px",
          paddingTop: "14px"
        }}
      >
        <NavLink
          className="brand-logo hide-on-med-and-down"
          to="/"
          style={{ position: "relative" }}
        >
          LA Homeless Outreach Portal
        </NavLink>

        {/* dropdown */}
        <ul id="dropdown1" className="dropdown-content">
          <li style={{ backgroundColor: "rgba(226, 42, 0, 0.85)" }}>
            <NavLink
              to="/report"
              style={{
                color: "white",
                fontSize: "11px",
                padding: "20px 16px",
                fontWeight: "bolder"
              }}
            >
              LOOKING TO HELP
            </NavLink>
          </li>
          <li className="divider" />
          <li style={{ backgroundColor: "rgba(226, 42, 0, 0.85)" }}>
            <NavLink
              to="/request"
              style={{
                color: "white",
                fontSize: "11px",
                padding: "20px 16px",
                fontWeight: "bolder"
              }}
            >
              LOOKING FOR SERVICES
            </NavLink>
          </li>
        </ul>

        <ul id="nav-mobile">
          <li style={{ borderRight: "0.1px solid #fff", fontWeight: "bolder" }}>
            <a className="dropdown-trigger" data-target="dropdown1">
              SUBMIT REQUEST
            </a>
          </li>
          <li style={{ borderRight: "0.1px solid #fff", fontWeight: "bolder" }}>
            <NavLink to={"/resources"}> RESOURCES </NavLink>
          </li>
          <li style={{ fontWeight: "bolder" }}>
            <NavLink to={"/contact"}> CONTACT </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
