import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <NavLink className="initials animation" to="/">LCR</NavLink>
                <ul className="navBtnCont">
                    <li className="navBtn">
                        <NavLink className="navBtnLink hvr-float" to="/about">About</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink hvr-float" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink hvr-float" to="/contact">Contact</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink hvr-float" to="/resume" >Resume</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

