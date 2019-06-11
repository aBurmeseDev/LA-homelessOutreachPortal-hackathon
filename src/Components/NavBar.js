import React, { Component } from 'react';
import * as routes from '../constants/routes';
import { NavLink } from 'react-router-dom';
import { isExpressionWrapper } from '@babel/types';

class NavBar extends Component {
    render() {
        return (
            <nav className='nav-wrapper blue darken-3'>
                <NavLink to={'/'}>Home </NavLink>
                <NavLink to={'/request'}>Make a Request </NavLink>
                <NavLink to={'/aboutus'}>About Us </NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                
            </nav> 
        )
    }
}

export default NavBar;