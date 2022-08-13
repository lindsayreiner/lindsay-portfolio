import React from 'react'

import '../styles/ContactDetails.css'

export default function ContactDetails() {
    return (
        <>
            <section className="contactDetails box-shadow">
                <h1 className="contactHeader">Contact Details</h1>
                <ul className="contactItems">
                    <li className="contact">954.560.5612</li>
                    <li className="contact"><a className="contactLink" href="mailto:lindsayreiner@hey.com">Email me directly</a></li>
                    <li className="contact"><a className="contactLink" href="https://www.linkedin.com/in/lindsay-c-reiner-97098a2a/">Visit my LinkedIn Profile</a></li>
                    <li className="contact"><a className="contactLink" href="https://github.com/lindsayreiner">Check out my other projects on GitHub</a></li>

                </ul>
            </section>
        </>
    )
}
