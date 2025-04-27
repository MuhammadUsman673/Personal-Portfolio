import { useState } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';

function Contact() {
    const [formMessage, setFormMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        setFormMessage('Sending...');
        document.getElementById('form-message').style.color = '#000';
        document.getElementById('form-message').style.background = '#ffcc00';

        emailjs.sendForm('service_ry4yafb', 'template_ykfnamr', form)
            .then(() => {
                setFormMessage('Message sent successfully!');
                document.getElementById('form-message').style.color = '#fff';
                document.getElementById('form-message').style.background = '#28a745';
                form.reset();
                setTimeout(() => setFormMessage(''), 3000);
            }, (error) => {
                setFormMessage('Failed to send message. Please try again.');
                document.getElementById('form-message').style.color = '#fff';
                document.getElementById('form-message').style.background = '#dc3545';
                console.error('EmailJS error:', error);
                setTimeout(() => setFormMessage(''), 3000);
            });
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fa-sharp fa-solid fa-paper-plane"></i> zainusman718@gmail.com</p>
                        <p><i className="fa-solid fa-phone"></i> 03317707720</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/reel/DITurBkMXvg/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/mohammed-usman-30284a328" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                            <button type="submit" className="btn btn1">Submit</button>
                        </form>
                        <div id="form-message">{formMessage}</div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright Made Easy<i className="fa-solid fa-heart"></i> by Usman</p>
            </div>
        </div>
    );
}

export default Contact;