import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar hamnav">
                <label for="hamburger" className="hidden">&#9776;</label>
                <input type="checkbox" id="hamburger" className="hidden" />
                <NavLink className="initials animation" to="/">LCR</NavLink>
                <h1 className="name hidden">Lindsay Reiner</h1>
                <ul className="navBtnCont">
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/about">About</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/contact">Contact</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/resume" >Resume</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

