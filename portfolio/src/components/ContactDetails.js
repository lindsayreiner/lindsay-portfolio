import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import { amber, blue, red } from '@mui/material/colors';

import '../styles/ContactDetails.css';
import resume from '../images/lindsay_reiner_CSresume_8.8.2022.pdf'

export default function ContactDetails() {
    return (
        <>
            <section className="contactDetails box-shadow">
                <h1 className="contactHeader">Contact Details</h1>
                <ul className="contactItems">
                    <li className="contact"><a className="contactLink" href="tel:9545605612">📱 954.560.5612</a></li>
                    <li className="contact"><a className="contactLink" href="mailto:lindsayreiner@hey.com">📧 lindsayreiner@hey.com</a></li>
                </ul>
                <Box className="icon-wrapper">
                    <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/lindsay-c-reiner-97098a2a/">
                        <LinkedInIcon sx={{ color: blue[900], width: 50, height: 50 }} />
                    </IconButton>
                    <IconButton aria-label="GitHub" href="https://github.com/lindsayreiner">
                        <GitHubIcon sx={{ color: amber[700], width: 50, height: 50 }} />
                    </IconButton>
                    <IconButton aria-label="Resume Download" href={resume} download>
                        <DownloadIcon sx={{ color: red[900], width: 50, height: 50 }} />
                    </IconButton>
                </Box>


            </section>
        </>
    )
}
