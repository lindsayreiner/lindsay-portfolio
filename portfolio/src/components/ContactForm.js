import React from 'react';
import '../styles/ContactForm.css';

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init('user_id');



export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
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
            <div className="contactInfoCont">
                <Box
                    className="contactForm"
                    component="form"
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h1>Get In Touch!</h1>
                    <TextField
                        id="outlined-basic" className="contactFormTextFields"
                        margin="normal"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        label="Name"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required />
                    <TextField
                        id="outlined-basic" className="contactFormTextFields"
                        margin="normal"
                        value={email}
                        onChange={e => setEmail(e.target.value)} label="Email Address"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required />
                    <TextField
                        id="outlined-basic" className="contactFormTextFields"
                        margin="normal"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        label="Subject"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required />
                    <TextField
                        id="outlined-multiline-static"
                        className="contactFormTextFields"
                        margin="normal"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        label="Message"
                        color="secondary"
                        multiline
                        rows={4}
                        fullWidth
                        required
                    />
                    <Button
                        onClick={submit}
                        className="contactFormSendBtn"
                        margin="normal"
                        variant="contained"
                        color="secondary"
                        size="large">Send</Button>
                    <span className={emailSent ? 'visible' : 'hidden'} style={{ "margin- top": "1rem" }}>Thank you for your message, we will be in touch in no time!</span>
                </Box>
            </div>

        </>
    )
}
