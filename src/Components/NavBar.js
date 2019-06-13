import React, { Component } from "react";
import * as routes from "../constants/routes";
import { NavLink } from "react-router-dom";
import { isExpressionWrapper } from "@babel/types";
import M from "materialize-css";
import "./NavBar.css";

class NavBar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elem1 = document.querySelectorAll(".dropdown-trigger");
      const instance1 = M.Dropdown.init(elem1);
    });
  }
  render() {
    return (
      <nav
        className="nav-center darken-3"
        style={{
          backgroundColor: "#ff3300",
          display: "flex",
          justifyContent: "space-evenly",
          lineHeight: "34px",
          paddingTop: "14px"
        }}
      >
        <a className="brand-logo hide-on-med-and-down" href="/" style={{ position: "relative" }}>
          LA-HOP
        </a>

        {/* dropdown */}
        <ul id="dropdown1" className="dropdown-content">
          <li style={{ backgroundColor: "#ff3300" }}>
            <a
              href="/report"
              style={{
                color: "white",
                fontSize: "11px",
                padding: "20px 16px",
                fontWeight: "bolder"
              }}
            >
              LOOKING TO HELP
            </a>
          </li>
          <li className="divider" />
          <li style={{ backgroundColor: "#ff3300" }}>
            <a
              href="/request"
              style={{
                color: "white",
                fontSize: "11px",
                padding: "20px 16px",
                fontWeight: "bolder"
              }}
            >
              LOOKING FOR SERVICES
            </a>
          </li>
        </ul>

        <ul id="nav-mobile">
          <li style={{ borderRight: "0.1px solid #fff" }}>
            <a className="dropdown-trigger" data-target="dropdown1">
              SUBMIT REQUEST
            </a>
          </li>
          <li style={{ borderRight: "0.1px solid #fff" }}>
            <NavLink to={"/resources"}> RESOURCES </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}> CONTACT </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
