import React from 'react'

import me from '../images/me.jpg';
import '../styles/About.css';

import {
    Grid
} from "@mui/material";

export default function About() {
    return (
        <section className="about-container">
            <Grid container>
                <Grid item xl={3}>
                    <img src={me} alt="Lindsay" className="me" />

                </Grid>

                <Grid item xl={9}>
                    <p className="about-text larger-margin">
                        Web Developer with Senior Operations experience who brings strong skills
                        in project customer service, communication, and documentation. Earned a
                        certificate in Full Stack Web Development from the University of North Carolina
                        with newly developed skills in JavaScript, CSS, and HTML. I’m passionate
                        about developing apps that are beautiful, useful, and intuitive.
                    </p>
                    <p className="about-text">
                        My extensive experience in the world of customer service brings
                        unique value to the UI/UX design, and deployment of engaging web
                        applications. Passionate about cross-functional collaboration,
                        maintaining an organized workflow, and bringing a "can do" attitude
                        to support the goals put before me and the team I am a part of. I am
                        dedicated, hardworking, and committed to continuing education. It is
                        my technical expertise, passionate engagement, inquisitive nature,
                        and highly-organized project management skill set that make me a
                        great addition to any team.
                    </p>
                </Grid>

            </Grid>
        </section>
    )
}
