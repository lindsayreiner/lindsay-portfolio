import React from 'react';
import '../styles/Contact.css';

import ContactForm from '../components/ContactForm'
import ContactDetails from '../components/ContactDetails'

import {
    Grid
} from "@mui/material";



export default function Contact() {
    return (
        <>
            <Grid container className="contactContainer">
                <Grid item xl={6} l={6} md={6.5} sm={11} xs={12}>
                    <ContactForm />
                </Grid>
                <Grid item xl={6} l={6} md={5.5}>
                    <ContactDetails />
                </Grid>
            </Grid>



        </>
    )
}
