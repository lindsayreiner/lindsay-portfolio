import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Home.css'

export default function Home() {
    return (
        <div className="welcomeCont">
            <NavLink className="welcome hvr-float-shadow" to="/about"> Welcome, I'm Lindsay.</NavLink>
            <p className="subtitle" >Front End Web Developer | Raleigh, NC</p>
        </div >
    );
}
