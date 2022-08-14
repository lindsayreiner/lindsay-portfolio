import React from 'react'
import '../styles/Resume.css'

import resume from '../images/lindsay_reiner_CSresume_8.8.2022.pdf'

import {
    Grid
} from "@mui/material";

export default function Resume() {
    return (
        <section className="resume-container">
            <p className="resume">Download my <a href={resume} download>resume</a></p>
            <Grid container >
                <Grid item xl={4} l={4}>
                    <article className="front-end proficiencies">
                        <h1>Front End</h1>
                        <h2>Languages</h2>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript | ES5 & ES6</li>
                        </ul>

                        <h2>Frameworks and Libraries</h2>
                        <ul>
                            <li>React</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                        </ul>
                    </article>
                </Grid>
                <Grid item xl={4} l={4}>
                    <article className="back-end proficiencies">
                        <h1>Back End</h1>
                        <h2>Languages</h2>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>SQL</li>
                            <li>jQuery</li>
                        </ul>

                        <h2>Platforms, Tools, and Database Programs</h2>
                        <div className="wrap">
                            <ul className="margin">
                                <li>Git Bash</li>
                                <li>GitHub</li>
                                <li>Heroku</li>
                                <li>Netlify</li>
                                <li>VS Code</li>

                            </ul>
                            <ul>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>NoSQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </article>
                </Grid>
                <Grid item xl={4} l={4}>
                    <article className="soft-skills proficiencies">
                        <h1>Soft Skills</h1>
                        <h2>General</h2>
                        <div className="wrap">
                            <ul>
                                <li>Teamwork</li>
                                <li>Work Ethic</li>
                                <li>Attention to Detail</li>
                                <li>Communication</li>
                                <li>Problem-solving</li>
                            </ul>
                            <ul>
                                <li>Adaptability</li>
                                <li>Time Management</li>
                                <li>Creativity</li>
                                <li>Self-Motivation</li>
                            </ul>
                        </div>
                        <h2>Customer Service</h2>
                        <div className="wrap">
                            <ul>
                                <li>Listening Skills</li>
                                <li>Empathy</li>
                                <li>Self-control</li>
                                <li>Assertiveness</li>
                                <li>Ownership</li>
                            </ul>
                            <ul>
                                <li>Positivity</li>
                                <li>Conflict Resolution</li>
                            </ul>
                        </div>
                    </article>
                </Grid>
            </Grid>
        </section>
    )
}
