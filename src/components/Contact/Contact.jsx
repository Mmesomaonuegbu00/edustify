import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [state, handleSubmit] = useForm("mrbgebnj");

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through the contact form or find our contact information below.
                    Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our
                    university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" /> mmesomaonuegbu9@gmail.com</li>
                    <li><img src={phone_icon} alt="" /> 08130469278</li>
                    <li><img src={location_icon} alt="" /> Ezekwabour otolo nnewi</li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={handleSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />

                    <label>Write your messages here </label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <button type="submit" className='btn dark-btn' disabled={state.submitting}>Submit now <img src={white_arrow} alt="" /></button>
                </form>

                <span>{state.succeeded ? "Thanks for your message!" : ""}</span>
            </div>
        </div>
    )
}

export default Contact;
