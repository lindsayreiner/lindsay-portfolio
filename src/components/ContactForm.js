import React, { useState } from 'react';
import '../styles/ContactForm.css';

import {
    Grid,
    TextField,
    Button
} from "@mui/material";


import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init('user_id');



export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = () => {
        if (name && email && subject && message) {
            const serviceId = 'service_h47nmgo';
            const templateId = 'template_q9hax96';
            const userId = 'a8QbPE4iqsz2Zka5N';
            const templateParams = {
                name,
                email,
                subject,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    return (
        <>
            <Grid
                className="contactForm box-shadow"
                component="form"
                noValidate
                autoComplete="off"
            >
                <h1 className="formHeader">Send me an email</h1>
                <Grid>
                    <TextField
                        id="outlined-basic" className="contactFormInput"
                        margin="normal"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        label="Name"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        required />
                </Grid>
                <Grid>
                    <TextField
                        id="outlined-basic" className="contactFormTextFields"
                        margin="normal"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        label="Email Address"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        required />
                </Grid>
                <Grid>
                    <TextField
                        id="outlined-basic" className="contactFormTextFields"
                        margin="normal"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        label="Subject"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        required />
                </Grid>
                <Grid>
                    <TextField
                        id="outlined-multiline-static"
                        className="contactFormTextFields"
                        margin="normal"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        label="Create a message here"
                        color="primary"
                        multiline
                        rows={4}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid>
                    <Button
                        onClick={handleSubmit}
                        className="contactFormSendBtn"
                        margin="normal"
                        variant="contained"
                        color="primary"
                        size="large">Send Message</Button>
                    <span className={emailSent ? 'visible' : 'hidden'} style={{ "marginTop": "1rem" }}>Thank you for your message, we will be in touch soon!</span>
                </Grid>
            </Grid>
        </>
    )
}
