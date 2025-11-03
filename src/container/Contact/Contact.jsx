import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { CustomAlert } from '../../component';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const validateEmail = (email) => {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      setAlertMessage('⚠️ Please enter your email!');
      return;
    }

    if (!validateEmail(email)) {
      setAlertMessage('❌ Invalid email address!');
      return;
    }

    const templateParams = { email };

    // Send project details to Nikesh
    emailjs
      .send('service_v422v2p', 'template_lrxkhqo', templateParams, 'Y5g94hvnv-2wL4DuW')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setAlertMessage('✅ Thank you for reaching out! We will contact you soon.');
          setEmail(''); // clear input after success
        },
        (error) => {
          console.error('FAILED...', error);
          setAlertMessage('❌ Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className='section__padding p__roboto contact__wrapper' id='contact'>
      <h1>Bring Stories to Life</h1>
      <p>
        I craft engaging videos with polished editing, motion graphics, sound design, and color grading. Delivering<br/>
        high-quality content tailored to your needs.
      </p>
      <div className="form-container">
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button 
          onClick={handleSubmit} 
          className="contact-button"
        >
          Contact Me
        </button>
      </div>

      {/* Custom alert */}
      <CustomAlert 
        message={alertMessage} 
        onClose={() => setAlertMessage('')} 
      />
    </div>
  );
};

export default Contact;
