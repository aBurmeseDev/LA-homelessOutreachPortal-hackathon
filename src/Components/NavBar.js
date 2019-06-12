import React, { Component } from "react";
import * as routes from "../constants/routes";
import { NavLink } from "react-router-dom";
import { isExpressionWrapper } from "@babel/types";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="nav-center darken-3"
        style={{
          backgroundColor: "#ff3300",
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <NavLink className="brand-logo hide-on-med-and-down" to={"/"}>
          LA-HOP{" "}
        </NavLink>

        <ul id="nav-mobile">
          <li
            style={{
              borderRight: "0.1px solid #fff"
            }}
          >
            <NavLink to={"/request"}> SUBMIT REQUEST </NavLink>
          </li>
          <li style={{ borderRight: "0.1px solid #fff" }}>
            <NavLink to={"/aboutus"}> RESOURCES </NavLink>
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
