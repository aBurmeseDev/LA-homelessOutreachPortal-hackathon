import React, { Component } from "react";
import * as routes from "../constants/routes";
import { NavLink } from "react-router-dom";
import { isExpressionWrapper } from "@babel/types";

class NavBar extends Component {
    render() {
        return (
            <nav className='nav-wrapper blue darken-3'>
                <NavLink className='brand-logo' to={'/'}>LA-HOP </NavLink>
                    <ul id='nav-mobile' className='right'>
                        <li><NavLink to={'/request'}>Make a Request </NavLink></li>
                        <li><NavLink to={'/aboutus'}>About Us </NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>

            </nav> 
        )
    }
}

export default NavBar;
